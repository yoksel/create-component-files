# create-component-files

Simple React component creator, just for fun : )

It creates a folder with a bunch of files in a desired location:

```
MyComponent
  |_ index.js
  |_ MyComponent.scss
  |_ README.md
```

## Install

```npm i create-component-files --save```

## Usage from console

```$(npm bin)/create-component-files --path=./src/components/ --name=MyComponent```

or without prefix `--name`:

```$(npm bin)/create-component-files --path=./src/components/ MyComponent```

## Usage from npm scripts

If you need have fixed components folder path:

```
"scripts": {
    "create": "create-component-files --path=./src/components/"
}
```

It allows to set `--path` once and then just pass component name like this:

```npm run create MyComponent```

Without fixed path:

```
"scripts": {
    "create": "create-component-files"
}
```

This command will create component in current folder:

```npm run create MyComponent```

In you need to pass a path:

```npm run create -- --path=PATH-TO-COMPONENTS MyComponent```;

## Options

`--name` — name for component. `--name=MyComponent` and `MyComponent` are equal.

`--path` — path to components folder. Optional.
