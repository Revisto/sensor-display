# Sensor Tracker
## _Track and Display Turbine Sensors and Stop the Turbine!_

Sensor Tracker shows the 4 turbine sensors in different charts to be monitored and the agent would be able to stop the turbine if anything went wrong.

![](https://github.com/Revisto/sensor-display/blob/master/media/turbine.gif)


## ⚙️ Installation

Sensor Tracker requires [Docker](https://www.docker.com/) to run.

Run the updater.py and Install Docker and start the Sensor Tracker, docker takes care of other dependencies.

```sh
apt install docker-ce
```

Now clone the repo:
```sh
git clone https://github.com/revisto/sensor-display
cd sensor-display
```
![](https://github.com/Revisto/sensor-display/blob/master/media/demo.gif)

## Docker

```sh
docker build -t sensor_tracker .
docker run -d sensor_tracker
```

## Updater

```sh
python3 updater.py
```

## Show your support

Please ⭐️ this repository if this project helped you!


## 📝 License

GNUv2

**Free Software, Hell Yeah!**