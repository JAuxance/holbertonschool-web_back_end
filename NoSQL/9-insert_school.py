#!/usr/bin/env python3
"""Module providing MongoDB queries for a school collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document into a collection."""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
