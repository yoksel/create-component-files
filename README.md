# create-component-files

Simple React component creator, just for fun

## Install

```npm i create-component-files --save```

## Usage

```node ./node_modules/create-component-files --path=./src/components/ --name=MyComponent"```

or like this (without prefix `--name`):

```node ./node_modules/create-component-files --path=./src/components/ MyComponent"```

or the same with handy command, place it to `scripts` section in `package.json` like this:

```"scripts": {
    "create": "node ./node_modules/create-component-files --path=./src/components/"
}```

It allows to set `--path` once and then just pass component name

Run in console:

```npm run create MyComponent```

## Options

`--path` — path to components folder

`--name` — name for component. When component name is passing, you can use both variants: `--name=MyComponent` or just `MyComponent`

