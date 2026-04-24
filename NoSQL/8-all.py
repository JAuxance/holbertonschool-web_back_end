#!/usr/bin/env python3
"""Module providing MongoDB queries for a school collection."""


def list_all(mongo_collection):
    """List all documents in a collection."""
    return list(mongo_collection.find())
