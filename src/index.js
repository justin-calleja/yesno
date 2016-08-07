var inquirer = require('inquirer');

module.exports = (args) => {
  args.type = args.type || 'confirm';
  args.name = args.name || 'yes';
  args.message = args.message || 'Are you sure?';
  args.default = args.default || true;
  
  var prompt = inquirer.createPromptModule();
  return prompt([
    {
      type: args.type,
      name: args.name,
      message: args.message,
      'default': args.default
    }
  ]);
};
