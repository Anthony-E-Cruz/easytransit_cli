const inquirer = require('inquirer');
const lTrainStations = require('./trainL')

module.exports = {
  menu: () => {
  const answers = inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'please select from the following options:',
        choices: [
          'check train station arrival times',
          'buy ticket',
          'check tickets',
          'activate tickets',
          'check station status',
          'exit program'
        ],
      },
    ])
    .then(answer => {
      switch (answer.type) {
        case 'check train station arrival times':
          lTrainStations.stations();
          break;
        case 'buy ticket':
          console.log("check train");
          break;
        case 'check tickets':
          console.log("check train");
          break;
        case 'activate tickets':
          console.log("check train");
          break;
        case 'check station status':
          console.log("check train");
          break;
        case 'exit program':
          process.exit(0);;
          break;
        default:
          break;
      }
    })
    .catch(err => console.log(err));
  }
}

// module.exports = menu;
