const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const login  = require('./lib/login');
const main  = require('./lib/main');

clear();

console.log(
  chalk.blue(
    figlet.textSync('Transit', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const user = await login.askLoginCredentials();
  console.log(
    chalk.blue(
      figlet.textSync(`Welcome ${user.username}!`, { 
        horizontalLayout: 'default',
        width: 50
      })
    )
  );
  await main.menu()
};

run();