# ES6 Basics

Introduction to modern JavaScript (ES6) features through a series of small,
focused exercises. Each task isolates a single language feature so the
behaviour is easy to reason about and test.

## Learning Objectives

By the end of this project, you should be able to explain:

- What ES6 is and the new features introduced by the specification
- The differences between `var`, `let`, and `const`
- Block-scoped variables and how scoping affects program behaviour
- Arrow functions and default function parameters
- Rest and spread operators
- Template literals (string interpolation)
- Object literal shorthand and computed property names
- Iterators and `for...of` loops

## Requirements

- Node.js 12.x
- All files use the `.js` extension
- Code is transpiled with Babel (`@babel/preset-env`)
- Linted with ESLint (Airbnb base configuration)
- Tested with Jest

## Setup

```bash
npm install
```

## Usage

Run a task file directly with `babel-node`:

```bash
npm run dev 0-main.js
```

Lint all task files:

```bash
npm run check-lint
```

Run the test suite:

```bash
npm test
```

Run lint and tests together:

```bash
npm run full-test
```

## Tasks

| File | Description |
| --- | --- |
| `0-constants.js` | Use `const` and `let` for variable declarations |
| `1-block-scoped.js` | Demonstrate block scoping with `let` |
| `2-arrow.js` | Convert standard functions to arrow functions |
| `3-default-parameter.js` | Default parameter values |
| `4-rest-parameter.js` | Count arguments with the rest operator |
| `5-spread-operator.js` | Concatenate arrays and strings using spread |
| `6-string-interpolation.js` | Use template literals for string interpolation |
| `7-getBudgetObject.js` | Build an object using property shorthand |
| `8-getBudgetCurrentYear.js` | Use computed property names |
| `9-getFullBudget.js` | Object method shorthand with spread |
| `10-loops.js` | Iterate with `for...of` and array entries |
| `11-createEmployeesObject.js` | Build an object with a dynamic key |
| `12-createReportObject.js` | Combine spread and method shorthand |
