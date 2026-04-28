# Python - Variable Annotations

Practice using Python's type hints (PEP 484) on variables, functions, and
more advanced constructs such as callables and generic sequences.

## Learning Objectives

By the end of this project, you should be able to explain:

- Type annotations in Python 3
- How to use type annotations to specify function signatures and variable types
- Duck typing and how it relates to static typing
- How to validate code with `mypy`

## Requirements

- Ubuntu 18.04 LTS
- Python 3.7
- All Python files use `#!/usr/bin/env python3`
- Code follows PEP 8 (`pycodestyle` 2.5.\*)
- All modules, classes, and functions are documented
- All functions and coroutines are type-annotated

## Usage

Each task can be exercised through its corresponding `*-main.py` file:

```bash
./0-main.py
```

Type-check the project with `mypy`:

```bash
mypy 0-add.py
```

## Tasks

| File | Description |
| --- | --- |
| `0-add.py` | `add(a: float, b: float) -> float` |
| `1-concat.py` | `concat(str1: str, str2: str) -> str` |
| `2-floor.py` | `floor(n: float) -> int` |
| `3-to_str.py` | `to_str(n: float) -> str` |
| `4-define_variables.py` | Annotated module-level variables |
| `5-sum_list.py` | `sum_list(input_list: List[float]) -> float` |
| `6-sum_mixed_list.py` | `sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float` |
| `7-to_kv.py` | `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]` |
| `8-make_multiplier.py` | `make_multiplier(multiplier: float) -> Callable[[float], float]` |
| `9-element_length.py` | `element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]` |
