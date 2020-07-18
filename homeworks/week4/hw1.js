const request = require('request');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';
request(`${baseUrl}/books?_limit=10`,
  (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i <= 9; i += 1) {
      const item = json[i];
      console.log(`${item.id} ${item.name}`);
    }
  });
