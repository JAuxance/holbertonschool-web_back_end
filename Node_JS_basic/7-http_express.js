const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const lines = ['This is the list of our students'];
  const originalLog = console.log;
  console.log = (msg) => lines.push(msg);

  countStudents(database)
    .then(() => {
      console.log = originalLog;
      res.send(lines.join('\n'));
    })
    .catch((err) => {
      console.log = originalLog;
      res.send(`${lines.join('\n')}\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
