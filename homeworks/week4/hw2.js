const request = require('request');
const process = require('process');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';
const fncName = process.argv[2];
const parameter = process.argv[3];

// 印出前 20 本 id 及書名
function listBook() {
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
}

function readBook(printBook) {
  request(`${baseUrl}/books/${printBook}`,
    (err, response, body) => {
      let json = '';
      try {
        json = JSON.parse(body);
      } catch (error) {
        console.log(err);
      }
      console.log(`${json.id} ${json.name}`);
    });
}

function deleteBook(deleteId) {
  request.delete(`${baseUrl}/books/${deleteId}`,
    (err) => {
      try {
        console.log(`Delete：${deleteId}`);
      } catch (error) {
        console.log(err);
      }
    });
}

function createBook(newBook) {
  request.post(`${baseUrl}/books`,
    {
      form:
      { name: `${newBook}` },
    },
    (err) => {
      try {
        console.log(`New Book: ${newBook}`);
      } catch (error) {
        console.log(err);
      }
    });
}

function updateBook(updateId) {
  const newName = process.argv[4];
  request.patch(`${baseUrl}/books/${updateId}`,
    {
      form:
      { name: `${newName}` },
    },
    (err) => {
      try {
        console.log(`Update ${updateId}:${newName}`);
      } catch (error) {
        console.log(err);
      }
    });
}

if (fncName === 'list') {
  listBook();
}

if (fncName === 'read') {
  readBook(parameter);
}

if (fncName === 'delete') {
  deleteBook(parameter);
}

if (fncName === 'create') {
  createBook(parameter);
}

if (fncName === 'update') {
  updateBook(parameter);
}
