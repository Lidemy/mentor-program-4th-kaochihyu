const request = require('request');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';

request(`${baseUrl}/books?_limit=20`,
  (err, response, body) => {
    let json = '';
    try {
      json = JSON.parse(body);
    } catch (error) {
      console.log(err);
    }
    for (let i = 0; i < json.length; i += 1) {
      console.log(`${json[i].id} ${json[i].name}`);
    }
  });
