#!/usr/bin/env python3
"""Module for deletion-resilient hypermedia pagination."""
import csv
import math
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return a page of data resilient to row deletions.

        Starts collecting items from `index` in the indexed dataset,
        skipping any missing keys, until `page_size` items are gathered.
        """
        assert isinstance(index, int) and 0 <= index < len(self.indexed_dataset())
        indexed = self.indexed_dataset()
        data = []
        current = index
        while len(data) < page_size:
            if current in indexed:
                data.append(indexed[current])
            current += 1
            if current > max(indexed.keys()):
                break
        return {
            "index": index,
            "next_index": current,
            "page_size": len(data),
            "data": data,
        }
