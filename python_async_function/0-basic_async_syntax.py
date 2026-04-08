#!/usr/bin/python3
"""Basic async syntax utilities."""

import asyncio
from random import uniform


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0 and max_delay."""
    delay = uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
