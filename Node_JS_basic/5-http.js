const http = require('http');
const fs = require('fs');

const database = process.argv[2];

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    const output = [`Number of students: ${students.length}`];

    const fields = {};
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    Object.keys(fields).forEach((field) => {
      output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });

    resolve(output.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    readDatabase(database)
      .then((studentsList) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${studentsList}`);
      })
      .catch((err) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
