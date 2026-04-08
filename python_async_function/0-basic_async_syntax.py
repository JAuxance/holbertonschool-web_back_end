#!usr/bin/python3
import asyncio
from random import uniform


async def wait_random(max_delay=10):
    delay = uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


print(asyncio.run(wait_random()))
print(asyncio.run(wait_random(5)))
print(asyncio.run(wait_random(15)))