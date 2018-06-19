# create-component-files

Simple React component creator, just for fun : )

## Install

```npm i create-component-files --save```

## Usage from console

```$(npm bin)/create-component-files --path=./src/components/ --name=MyComponent"```

or without prefix `--name`:

```node ./node_modules/create-component-files --path=./src/components/ MyComponent"```

## Usage from npm scripts

```
"scripts": {
    "create": "create-component-files --path=./src/components/"
}
```

It allows to set `--path` once and then just pass component name.

Run `create`:

```npm run create MyComponent```

## Options

`--path` — path to components folder.

`--name` — name for component. You can use both variants for passing name: `--name=MyComponent` or just `MyComponent`.

