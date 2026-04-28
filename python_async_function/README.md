# Python - Async

Introduction to asynchronous programming in Python using `asyncio`. The tasks
build from a single coroutine to concurrent execution and explicit task
management.

## Learning Objectives

By the end of this project, you should be able to explain:

- The `async` and `await` syntax
- How to run an asynchronous program with `asyncio`
- How to run concurrent coroutines with `asyncio.gather` and
  `asyncio.as_completed`
- How to create asyncio tasks with `asyncio.create_task`
- How to use the `random` module from within a coroutine

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
./3-main.py
./4-main.py
```

## Tasks

| File | Description |
| --- | --- |
| `0-basic_async_syntax.py` | `wait_random` coroutine that sleeps for a random delay |
| `1-concurrent_coroutines.py` | `wait_n` running `n` `wait_random` coroutines concurrently |
| `2-measure_runtime.py` | `measure_time` returning the average runtime per coroutine |
| `3-tasks.py` | `task_wait_random` returning an `asyncio.Task` |
| `4-tasks.py` | `task_wait_n` running `n` `task_wait_random` tasks |
