# NoSQL

Introduction to NoSQL databases through MongoDB. The first half of the project
uses the Mongo shell to perform basic CRUD operations; the second half uses
PyMongo to drive the same operations from Python.

## Learning Objectives

By the end of this project, you should be able to explain:

- What NoSQL means and how it differs from SQL
- The trade-offs between ACID and BASE consistency models
- What document storage is and when it is appropriate
- The main types of NoSQL databases
- The benefits of NoSQL for certain workloads
- How to query, insert, update, and delete information in MongoDB
- How to use MongoDB from Python with PyMongo

## Requirements

- Ubuntu 18.04 LTS
- MongoDB 4.2
- Python 3.7
- PyMongo 3.10
- All Python files use `#!/usr/bin/env python3`
- Code follows PEP 8 (`pycodestyle` 2.5.\*)
- All modules, classes, and functions are documented

## Setup

Install MongoDB:

```bash
sudo apt install -y mongodb
```

Install PyMongo:

```bash
pip3 install pymongo==3.10
```

Start the MongoDB service:

```bash
sudo service mongod start
```

## Usage

Mongo shell tasks are executed by piping the script into `mongo`:

```bash
cat 0-list_databases | mongo
```

Python tasks expect a callable `mongo_collection` (a `pymongo.collection`
object) and are typically driven by a `*-main.py` script:

```bash
./8-main.py
```

## Tasks

### Mongo shell

| File | Description |
| --- | --- |
| `0-list_databases` | List all databases |
| `1-use_or_create_database` | Switch to or create the `my_db` database |
| `2-insert` | Insert a document into the `school` collection |
| `3-all` | List all documents in `school` |
| `4-match` | List documents matching a filter |
| `5-count` | Count documents in `school` |
| `6-update` | Add an attribute to matching documents |
| `7-delete` | Delete documents matching a filter |

### PyMongo

| File | Description |
| --- | --- |
| `8-all.py` | Return all documents from a collection |
| `9-insert_school.py` | Insert a new document with arbitrary fields |
| `10-update_topics.py` | Update the `topics` field of matching documents |
| `11-schools_by_topic.py` | Return schools that teach a given topic |
| `12-log_stats.py` | Print statistics from the `logs.nginx` collection |
