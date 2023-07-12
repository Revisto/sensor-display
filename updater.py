from random import randint, uniform
import requests
from time import sleep
from os import getpid
process_id = getpid()
def sensor_data():
    diesel_consumption = uniform(13, 14)
    tempreture = randint(480, 580)
    rpm = randint(2000, 4000)
    gas_mass = randint(250, 750)

    return {
        "diesel_consumption": diesel_consumption,
        "tempreture": tempreture,
        "rpm": rpm,
        "gas_mass": gas_mass,
        "process_id": process_id
    }

while True:
    url = 'http://127.0.0.1:5000/update'
    data = sensor_data()
    requests.post(url, params = data)
    sleep(0.1)