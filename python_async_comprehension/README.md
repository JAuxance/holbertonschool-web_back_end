# Python - Async Comprehension

Practice using asynchronous generators and asynchronous comprehensions in
Python with `asyncio`. Builds on the prior async function project and ends
with a parallel runtime measurement.

## Learning Objectives

By the end of this project, you should be able to explain:

- How to write an asynchronous generator
- How to use async comprehensions
- How to type-annotate generators
- How to gather coroutines and measure their concurrent runtime

## Requirements

- Ubuntu 18.04 LTS
- Python 3.7
- All Python files use `#!/usr/bin/env python3`
- Code follows PEP 8 (`pycodestyle` 2.5.\*)
- All modules, classes, functions, and coroutines are documented
- All functions and coroutines are type-annotated

## Usage

Each task can be exercised through its corresponding `*-main.py` file:

```bash
./0-main.py
./1-main.py
./2-main.py
```

## Tasks

| File | Description |
| --- | --- |
| `0-async_generator.py` | Async generator yielding 10 random floats with 1 second delays |
| `1-async_comprehension.py` | Collect 10 values from `async_generator` via async comprehension |
| `2-measure_runtime.py` | Run `async_comprehension` four times in parallel with `asyncio.gather` |
