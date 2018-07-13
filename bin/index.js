#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const {
  setCurrentDir,
  isLowerCase,
  errorMessage,
  getJsContent,
  getJsContentContainer,
  getCSSContent,
  getMDContent
} = require('../lib/helpers');

// Colored output
const error = chalk.keyword('tomato');
const warning = chalk.keyword('darkorange');
const success = chalk.keyword('yellowgreen');
const gold = chalk.keyword('gold');
const seagreen = chalk.keyword('lightseagreen');
const teal = chalk.keyword('teal');

const usage = `${gold('Usage:')} $(npm bin)/create-component-files --path=./src/Components --name=MyComponent`;

// ------------------------------

function createReactComponent() {
  // Input arguments
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(usage);
    return;
  }

  const params = args.reduce((obj, item) => {
    let [name, value] = item.split('=');
    name = name.replace('--', '');

    if (value) {
      obj[name] = value;
    } else {
      obj['name'] = name;
    }

    return obj;
  }, {});

  if (!params.name) {
    console.log(error('Component not created:'), 'pass a component name');
    console.log(usage);
    return;
  }

  if (isLowerCase(params.name)) {
    console.log(error('Component was not created:'));
    console.log('React component name must starts with an uppercase letter');
    return;
  }

  if (params.path === undefined) {
    params.path = setCurrentDir(params);
  } else if (params.path.slice(-1) !== '/') {
    params.path += '/';
  }

  createFileTree(params);
}

// Create files & folders
// ------------------------------

function createFileTree(params) {
  let jsContent = getJsContent(params);
  if (params.type === 'container') {
    jsContent = getJsContentContainer(params);
  }
  const cssContent = getCSSContent(params);
  const mdContent = getMDContent(params);
  let componentPath = `${params.path}${params.name}`;

  // Add folder
  fs.mkdir(componentPath, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.log(error('Component was not created:'));
        console.log(`path ${componentPath} already exists`);
      } else if (err.code === 'ENOENT') {
        console.log(error('Component was not created:'));
        console.log(`path ${params.path} doesn't exist`);
      } else {
        console.log(error('Component was not created:'));
        console.log(err);
      }

      return;
    }

    // Add JS-file
    fs.writeFile(`${componentPath}/index.js`, jsContent, (jsFileErr) => {
      errorMessage(jsFileErr, 'JS');

      if(params.type === 'container') {
        writeMdFile(successMessage);
        return;
      }

      // Add CSS-file
      writeCSSFile(() => writeMdFile(successMessage));
    });
  });

  const writeCSSFile = (callback) => {
    fs.writeFile(`${componentPath}/${params.name}.scss`, cssContent, (cssFileErr) => {
      errorMessage(cssFileErr, 'SCSS');

      // Add next file
      callback();
    });
  }

  const writeMdFile = (callback) => {
    fs.writeFile(`${componentPath}/README.md`, mdContent, (mdFileErr) => {
      errorMessage(mdFileErr, 'README');

      callback();
    });
  }

  const successMessage = () => {
    const finalPath = componentPath.replace('././', '');

    console.log(`${success('Component was created:')} ${finalPath}`);
  }
}

// ------------------------------

createReactComponent();
