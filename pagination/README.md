# Pagination

Three progressive implementations of pagination over a CSV dataset of popular
baby names: simple page/page_size pagination, hypermedia metadata, and a
deletion-resilient strategy that keeps cursors stable when rows are removed
between requests.

## Learning Objectives

By the end of this project, you should be able to explain:

- How to paginate a dataset with simple `page` and `page_size` parameters
- How to paginate using hypermedia metadata (HATEOAS-style)
- How to paginate in a way that is resilient to deletions in the dataset

## Requirements

- Ubuntu 18.04 LTS
- Python 3.7
- All Python files use `#!/usr/bin/env python3`
- Code follows PEP 8 (`pycodestyle` 2.5.\*)
- All modules, classes, and functions are documented
- All functions and coroutines are type-annotated
- The dataset `Popular_Baby_Names.csv` must be available in the working
  directory

## Usage

Each task can be exercised through its corresponding `*-main.py` file:

```bash
./0-main.py
./1-main.py
./2-main.py
./3-main.py
```

## Tasks

| File | Description |
| --- | --- |
| `0-simple_helper_function.py` | `index_range(page, page_size)` returning the start/end index pair |
| `1-simple_pagination.py` | `Server.get_page` returning a single page from the CSV |
| `2-hypermedia_pagination.py` | `Server.get_hyper` returning the page plus pagination metadata |
| `3-hypermedia_del_pagination.py` | `Server.get_hyper_index` returning a page that survives deletions |
