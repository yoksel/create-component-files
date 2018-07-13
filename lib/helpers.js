const path = require('path');
const colors = ['tomato', 'darkorange', 'gold', 'yellowgreen', 'lightseagreen', 'teal'];

const setCurrentDir = (params) => {
  const currentDir = path.relative(process.cwd(), process.env.INIT_CWD);
  let currentPath = '';

  if (currentDir) {
    currentPath = `./${currentDir}/`;
  }

  return currentPath;
};

// ------------------------------

const isLowerCase = (name) => {
  const firstNameLetter = name.substr(0,1);

  return firstNameLetter === firstNameLetter.toLowerCase();
};

// ------------------------------

const errorMessage = (err, fileTypetype) => {
  if (err) {
    console.log(`${error(`${fileTypetype}-file for component was not created:`)}`);
    console.log(err);
  }
};

// ------------------------------

const getJsContent = (params) => {
  return `import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './${params.name}.css';

class ${params.name} extends Component {
  render() {
    return (
      <div className="${params.name}">${params.name}</div>
    );
  }
}

export default ${params.name};

${params.name}.propTypes = {

};
`;
};

// ------------------------------

const getJsContentContainer = (params) => {
  return `import {connect} from 'react-redux';

import ${params.name}Template from '../../components/${params.name}';

const mapStateToProps = (state) => {
  return {
    data: state.${params.name}
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onClick: (data) => {
      dispatch({
        type: 'DO_SOMETHING',
        id: data.id
      });
    }
  };
};

const ${params.name} = connect(
  mapStateToProps,
  mapDispatchProps
)(${params.name}Template);

export default ${params.name};
`;
};

// ------------------------------

const getCSSContent = (params) => {
  const randomPos = Math.floor(Math.random() * colors.length);
  const color = colors[randomPos];

  return `.${params.name} {
  color: ${color};
}
`;
};

// ------------------------------

const getMDContent = (params) => {
  return `# ${params.name}

## Props
`;
};

// ------------------------------

module.exports = {
  setCurrentDir,
  isLowerCase,
  errorMessage,
  getJsContent,
  getJsContentContainer,
  getCSSContent,
  getMDContent
};
