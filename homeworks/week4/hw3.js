const request = require('request');
const process = require('process');

const baseUrl = 'https://restcountries.eu/rest/v2';
const country = process.argv[2];

request(`${baseUrl}/name/${country}`,
  (err, response, body) => {
    let json = '';
    try {
      json = JSON.parse(body);
      console.log(`
        ==========
        國家：${json[0].name}
        首都：${json[0].capital}
        貨幣：${json[0].currencies[0].code}
        國碼：${json[0].callingCodes}
        `);
    } catch (error) {
      console.log(err);
    }
  });
