# ES6 Classes

Practice project on ES6 classes: declaration syntax, getters/setters,
inheritance with `extends` / `super`, static methods, abstract base classes
via `new.target`, and well-known symbols (`Symbol.toStringTag`,
`Symbol.toPrimitive`).

## Learning Objectives

By the end of this project, you should be able to explain:

- How to define a class with the `class` keyword
- How to add methods, getters, setters, and static methods
- How to extend a class from another class with `extends` / `super`
- How metaprogramming hooks like `Symbol.toStringTag` and
  `Symbol.toPrimitive` change object behaviour
- How `new.target` can be used to enforce abstract classes

## Requirements

- Ubuntu 20.04 LTS, Node.js 20.x, npm 9.x
- All files use the `.js` extension and end with a newline
- All functions and classes are exported
- Code is transpiled with Babel (`@babel/preset-env`)
- Linted with ESLint (Airbnb base configuration)
- Tested with Jest

## Setup

```bash
npm install
```

## Tasks

| File | Description |
| --- | --- |
| `0-classroom.js` | `ClassRoom` class with a single attribute |
| `1-make_classrooms.js` | Initialize an array of `ClassRoom` instances |
| `2-hbtn_course.js` | `HolbertonCourse` class with type-checked getters/setters |
| `3-currency.js` | `Currency` class with a formatting helper |
| `4-pricing.js` | `Pricing` class with a static conversion method |
| `5-building.js` | Abstract `Building` class enforced via `new.target` |
| `6-sky_high.js` | `SkyHighBuilding` extending `Building` |
| `7-airport.js` | `Airport` class customizing `Symbol.toStringTag` |
| `8-hbtn_class.js` | `HolbertonClass` implementing `Symbol.toPrimitive` |
| `9-hoisting.js` | `HolbertonClass` and `StudentHolberton` used together |
| `10-car.js` | `Car` class with a clone method |
