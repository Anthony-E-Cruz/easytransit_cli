const inquirer = require('inquirer');
const mta = require('../util/mta_feed_L');
const lTrainStations = [
  "Eighth Avenue",
  "Sixth Avenue",
  "Union Square",
  "Third Avenue",
  "First Avenue",
  "Bedford Avenue",
  "Lorimer Street",
  "Graham Avenue",
  "Grand Street",
  "Montrose Avenue",
  "Morgan Avenue",
  "Jefferson Street",
  "DeKalb Avenue",
  "Myrtle–Wyckoff Avenues",
  "Halsey Street",
  "Wilson Avenue",
  "Bushwick Avenue–Aberdeen Street",
  "Broadway Junction",
  "Atlantic Avenue",
  "Sutter Avenue",
  "Livonia Avenue",
  "New Lots Avenue",
  "East 105th Street",
  "Canarsie–Rockaway Parkway"
  ];

module.exports = {
  stations: () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'type',
          message: 'select station:',
          choices: lTrainStations
        },
      ])
      .then(answer => {
        switch (answer.type) {
          case 'Sixth Avenue':
            mta.dataFeed()
            break;
          default:
            break;
        }
      });
  }
}