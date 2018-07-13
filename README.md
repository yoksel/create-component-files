# create-component-files

Simple React component creator, just for fun : )

It creates a folder with a bunch of files in a desired location:

```
MyComponent
  |_ index.js
  |_ MyComponent.scss
  |_ README.md
```

With flag `type=container` Scss-file will not be created:

```
MyComponent
  |_ index.js
  |_ README.md
```

## Install

```npm i create-component-files --save```

## Usage from package

```$(npm bin)/create-component-files --path=./src/components/ --name=MyComponent```

or without prefix `--name`:

```$(npm bin)/create-component-files --path=./src/components/ MyComponent```

## Usage from npm scripts

If you need to have fixed components folder path:

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

`--type` — type of component. Optional. Use `type=container` to get container component without styles. Js-file will contain `mapStateToProps`, `mapDispatchProps` and `connect`;

## My usage example

```
"scripts": {
  "create": "create-component-files",
  "component": "create-component-files --path=./src/components/",
  "container": "create-component-files --path=./src/containers/ --type=container",
}
```

So command `npm run create MyComponent` will create MyComponent in current folder. Folder will contain js, styles & docs.

`npm run component MyComponent` will create MyComponent in folder with your components. Folder will contain js, styles & docs.

`npm run container MyComponent` will create MyComponent in folder with your containers. Folder will contain js & docs (no styles).
