import paho.mqtt.client as mqtt
import json
import time
import random
from datetime import datetime
from time import sleep

# Paramètres de connexion à compléter
# Nom du groupe sans espaces avec la nomenclature WEB2 ou WEB3
#Exemple : WEB2-GROUPE3
GROUPNAME = "WEB3-GROUPE4"

MQTT_BROKER = "hetic.arcplex.fr"

# Login et mot de passe du groupe
MQTT_USERNAME = "GROUPE4"
MQTT_PASSWORD = "17334042"
# un ID différent par Node
NODE_ID = ["Salle01", "Salle02", "Salle03", "Salle04", "Salle05",
           "Salle06", "Salle07", "Salle08", "Salle09", "Salle10"]
# ID du sensor

CAPTIN = "captIN"
CAPTOUT = "captOUT"
CAPTLUM = "captLUM"
CAPTTEMP = "captTEMP"


# Type de donnée renvoyée : Random 0 ou 1
VALINMIN = 1
VALINMAX = 10
VALOUTMIN = 1
VALOUTMAX = 3
VALLUMMIN = 150
VALLUMMAX = 700
VALTEMPMIN = 20
VALTEMPMAX = 27


def run(condition):
    while datetime.now().minute not in {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 27, 32, 38, 42, 47, 52, 54, 57, 59}:
        sleep(1)

    def task():
        client = mqtt.Client("client")
        client.username_pw_set(username=MQTT_USERNAME, password=MQTT_PASSWORD)
        client.connect(MQTT_BROKER)
        for node in NODE_ID:
            MQTT_TOPIC = GROUPNAME + "/" + node
            MQTT_MSG = json.dumps({
                "source_address": node, "sensor_id":
                {
                    CAPTIN: {
                        "tx_time_ms_epoch": int(time.time()),
                        "data": {"value": round(random.randint(VALINMIN, VALINMAX))}
                    },
                    CAPTOUT: {
                        "tx_time_ms_epoch": int(time.time()),
                        "data": {"value": round(random.randint(VALOUTMIN, VALOUTMAX))}
                    },
                    CAPTLUM: {
                        "tx_time_ms_epoch": int(time.time()),
                        "data": {"value": round(random.uniform(VALLUMMIN, VALLUMMAX), 2)}
                    },
                    CAPTTEMP: {
                        "tx_time_ms_epoch": int(time.time()),
                        "data": {"value": round(random.uniform(VALTEMPMIN, VALTEMPMAX), 2)}
                    }
                },
            })
            client.publish(MQTT_TOPIC, MQTT_MSG)
            print("MQTT Mis à jour - Node %s Timestamp : %s" %
                  (node, int(time.time())))
        client.disconnect()
    task()
    while condition == True:
        sleep(60 * 15)
        task()


run(True)