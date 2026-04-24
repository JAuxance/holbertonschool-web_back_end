#!/usr/bin/env python3
"""Module providing MongoDB queries for a school collection."""


def schools_by_topic(mongo_collection, topic):
    """Return a list of schools that offer a specific topic."""
    return list(mongo_collection.find({"topics": topic}))
