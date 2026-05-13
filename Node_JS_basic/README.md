# Node JS basic

Project to learn the basics of Node.js, Express, ES6 with Babel, file I/O (sync and async), and HTTP servers.

## Requirements

- Ubuntu 20.04 LTS
- Node 20.x.x
- All files end with a new line
- Use `.js` extension
- Code tested with Jest (`npm run test`)
- Code linted with ESLint
- Run `npm run full-test` to verify everything

## Setup

```bash
npm install
```

## Tasks

| File | Description |
| --- | --- |
| `0-console.js` | Function `displayMessage` that logs a message |
| `1-stdin.js` | Reads user input from process.stdin |
| `2-read_file.js` | `countStudents` reading database synchronously |
| `3-read_file_async.js` | `countStudents` reading database asynchronously (Promise) |
| `4-http.js` | Simple HTTP server using Node `http` module |
| `5-http.js` | HTTP server with `/` and `/students` endpoints |
| `6-http_express.js` | Simple HTTP server using Express |
| `7-http_express.js` | Express server with `/` and `/students` endpoints |
| `full_server/` | Organized Express app with controllers, routes, and utils |

## Provided files

- `database.csv` — student records
- `package.json` — dependencies and scripts
- `babel.config.js` — Babel configuration
- `.eslintrc.js` — ESLint configuration
