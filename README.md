# create-component-files

Simple React component creator, just for fun : )

## Install

```npm i create-component-files --save```

## Usage from console

```$(npm bin)/create-component-files --path=./src/components/ --name=MyComponent"```

or without prefix `--name`:

```$(npm bin)/create-component-files --path=./src/components/ MyComponent"```

## Usage from npm scripts

If you need have fixed components folder path:

```
"scripts": {
    "create": "create-component-files --path=./src/components/"
}
```

It allows to set `--path` once and then just pass component name like this.

```npm run create MyComponent```

Without fixed path:

```
"scripts": {
    "create": "create-component-files"
}
```

```npm run create MyComponent```

In this case you may to pass path:

```npm run create -- --path=PATH-TO-COMPONENTS MyComponent```;

If `--path` was not provided, component will be created in current folder.

## Options

`--name` — name for component. You can use both variants for passing name: `--name=MyComponent` or just `MyComponent`.

`--path` — path to components folder. Optional.
