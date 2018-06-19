#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

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
        }
        else {
            obj['name'] = name;
        }

        return obj;
    }, {});

    if (!params.name) {
        console.log(error(`Component not created:`), 'pass a component name');
        console.log(usage);
        return;
    }

    if (isLowerCase(params.name)){
        console.log(error(`Component was not created:`));
        console.log('React component name must starts with an uppercase letter');
        return;
    }

    if (params.path === undefined) {
        params.path = './';
    }

    createFileTree(params);
}

// Create files & folders
// ------------------------------

function createFileTree(params) {
    const jsContent = getJsContent(params);
    const cssContent = getCSSContent(params);
    const componentPath = `./${params.path}/${params.name}`;

    fs.mkdir(componentPath, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.log(`${error(`Component was not created:`)} path ${componentPath} already exists`);
            }
            else if (err.code === 'ENOENT') {
                console.log(`${error(`Component was not created:`)} path ${params.path} doesn't exist`);
            }
            else {
                console.log(`${error(`Component was not created:`)} ${err}`);
            }
            return;
        }

        // Add JS-file
        fs.writeFile(`${componentPath}/index.js`, jsContent, (err) => {
            if (err) {
                console.log(`${error(`JS for Component was not created:`)} ${err}`);
                return;
            }
            // Add CSS-file
            fs.writeFile(`${componentPath}/index.css`, cssContent, (err) => {
                if(err) {
                    console.log(`${error(`CSS for Component was not created:`)} ${err}`);
                    return;
                }

                console.log(`${success(`Component was created:`)} ${params.path}${params.name}`);
            });
        });

    });
}

// Helpers
// ------------------------------

function getJsContent(params) {
return `import React, { Component } from 'react';
import './index.css';

class ${params.name} extends Component {
  render() {
    return (
        <div className="${params.name}">${params.name}</div>
    );
  }
}

export default ${params.name};
`;
}

function getCSSContent(params) {
return `.${params.name} {
    color: yellowgreen;
}`;
}

// ------------------------------

createReactComponent();
