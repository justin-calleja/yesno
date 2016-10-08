[![NPM](https://nodei.co/npm/@justinc/yesno.png?downloads=true)](https://nodei.co/npm/@justinc/yesno/)

[Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) wrapper for asking a (confirm by default) question.

## Installation

```shell
npm install @justinc/yesno
```

## Usage

```js
require('@justinc/yesno')({ message: 'Do you want to do X?' }).then(answer => {
  if (answer.yes) {
    console.log('Doing X');
  } else {
    console.log('Not doing X');
  }
});
```

## Object Argument:

- **type**: See `type` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `'confirm'`)
- **name**: See `name` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `'yes'`)
- **message**: See `message` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `'Are you sure?'`)
- **default**: See `default` [here](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#question). (default: `true`)

