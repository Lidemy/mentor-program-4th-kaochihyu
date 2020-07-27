const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'hwdicbpdwusq387flxfxim7cndokzq',
  },
};

function callback(error, response, body) {
  if (error) {
    console.log(error);
  }
  let json;
  try {
    json = JSON.parse(body);
  } catch (err) {
    console.log(err);
  }
  for (let i = 0; i < json.top.length; i += 1) {
    console.log(`${json.top[i].viewers} ${json.top[i].game.name}`);
  }
}

request(options, callback);
