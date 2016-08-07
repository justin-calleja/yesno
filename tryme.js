// require('@justinc/yesno') elsewhere
require('./src')({ message: 'Do you want to do X?' }).then(answer => {
  if (answer.yes) {
    console.log('Doing X');
  } else {
    console.log('Not doing X');
  }
});
