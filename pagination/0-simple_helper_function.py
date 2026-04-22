#!/usr/bin/python3
"""Module that provides a helper function for pagination."""



def index_range(page, page_size):
    """Calculate the start and end index for pagination.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.
        Returns:
            tuple: A tuple containing the start index and end index for the page.
            """
            start_index = (page - 1) * page_size
            end_index = start_index + page_size
            return (start_index, end_index)
