import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ProgressSpinner from "../../components/ProgressSpinner/ProgressSpinner";
import Notification from "../../components/Notification/Notification";
import Select from "../../components/Select/Select";
import DataCircle from "../../components/DataCircle/DataCircle";

import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Knob } from "primereact/knob";
import { InputSwitch } from "primereact/inputswitch";

const RoomDetails = () => {
  const getRandomNumber = (min, max) => {
    return Math.trunc(Math.random() * (max - min) + min);
  };

  const getRandomBoolean = () => {
    return Math.random() >= 0.5;
  };

  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [allRooms, setAllRooms] = useState(null);
  const [studentValue] = useState(getRandomNumber(0, 50));
  const [studentAverageValue] = useState(getRandomNumber(0, 50))
  const [tempValue, setTempValue] = useState(getRandomNumber(18, 26));
  const [lightValue, setLightValue] = useState(getRandomNumber(200, 400));
  const [projectorValue, setProjectorValue] = useState(getRandomBoolean());
  const [fanValue, setFanValue] = useState(getRandomBoolean());
  const [loading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  const notifications = [
    {
      label: "La température de la salle est idéale",
      severity: "success",
    },
    {
      label:
        "La température des salles est supérieure à celle recommandée, nous vous recommandons de réduire la température des chauffages",
      severity: "warning",
    },
    {
      label: "La lumière a été réduite automatiquement",
      severity: "success",
    },
    {
      label: "Consommation excessive de la lumière",
      severity: "warning",
    },
  ];

  const setTimer = () => {
    // Display clock
    setInterval(() => setCurrentDate(new Date().toLocaleString()), 1000);
  };

  const sucessMessage = () => {
    toast.dismiss();
    toast.success("Les modifications ont été appliquées");
  };

  const redirectTo = (id) => {
    history.push("/rooms/" + id);

    // Meh
    window.location.reload();
  };

  const checkRoomState = () => {
    let currentDate = new Date();
    let getHour = currentDate.getHours();
    let getDay = currentDate.getDay();

    // From Monday to Friday
    let classDays = [1, 2, 3, 4, 5];

    // Check between 9am and 5pm
    return classDays.includes(getDay) && getHour >= 9 && getHour <= 17;
  };

  const history = useHistory();

  useEffect(() => {
    if (room === null) {
      // Get current room
      axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/rooms/${id}`,
      })
        .then((res) => {
          setRoom(res.data);
          setIsLoading(false);
          console.log(res.data);
        })
        .catch((error) => {
          toast.error("This class doesn't exist \n" + error.message);
          history.push("/rooms");
        });

      // Get all rooms to have a quickswitch
      axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/rooms/`,
      }).then((res) => {
        setAllRooms(res.data);
        setIsLoading(false);
      });
    }

    setTimer();

    return () => {
      setCurrentDate({}); // This worked for me
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {loading === true ? (
        <ProgressSpinner />
      ) : (
        <div className="flex justify-between px-6 py-8 h-screen fadeIn">
          <div className="flex flex-col w-min">
            <div className="gradient-main shadow-lg w-full lg:max-w-sm flex flex-col h-3/6 px-6 pt-8 mb-2 rounded-lg">
              <h2 className="text-white text-2xl font-medium text-center">
                Salle: {room.name}
              </h2>
              <span className="flex flex-row items-center justify-center my-2 text-white">
                <FontAwesomeIcon icon={faClock} className="text-lg mr-2" />
                <p>{currentDate}</p>
                <div
                  className={
                    checkRoomState
                      ? "h-4 w-4 ml-2 rounded-full fill-current bg-green-500"
                      : "h-4 w-4 ml-2 rounded-full fill-current bg-red-500"
                  }
                ></div>
              </span>

              <div
                className="rounded-lg h-64 bg-cover"
                style={{
                  backgroundImage:
                    "url(https://source.unsplash.com/256x256/?classroom)",
                }}
              ></div>

              <span className="flex flex-row items-center justify-center my-4 text-white text-xl">
                <FontAwesomeIcon icon={faUsers} className="text-lg mr-2" />
                <p>{studentValue} élèves</p>
              </span>

              {allRooms !== null && (
                <Select
                  options={allRooms}
                  currentId={id}
                  onChange={(value) => redirectTo(value)}
                />
              )}
            </div>

            <div className="bg-white shadow-lg w-full lg:max-w-sm flex flex-col h-3/6 px-6 pt-8 rounded-lg text-black">
              <h2 className="text-2xl font-medium mb-4">
                <FontAwesomeIcon icon={faBell} className="text-lg mr-2" />
                Notifications ({notifications.length})
              </h2>

              {notifications.map((notification, index) => (
                <Notification
                  label={notification.label}
                  severity={notification.severity}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col m-8 my-0">
            <div className="h-4/6 w-full m-2 mt-0 rounded-lg bg-white card-shadow flex items-center justify-center px-6 py-8">
              <div className="w-full h-full flex items-center flex-col">
                <h1 className="text-gray-700 text-3xl font-medium mb-4">
                  Vue d'ensemble
                </h1>

                <div className="w-full">
                  <div className="flex flex-col items-start justify-start w-full border-2 border-gray-300 p-6 rounded-md tracking-wide">
                    <h1 className="text-gray-700 text-2xl font-medium">
                      En ce moment
                    </h1>
                    <div className="flex justify-start w-full">
                      <DataCircle unit="°C" value={tempValue} />
                      <DataCircle unit="lx" value={lightValue} />
                      <DataCircle unit="élèves" value={`${studentValue}/50`} />
                      <DataCircle
                        unit="place libre"
                        value={`${100 - (100 * studentValue) / 50}%`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full border-2 border-gray-300 p-6 rounded-md tracking-wide">
                    <h1 className="text-gray-700 text-2xl font-medium mb-6">
                      Moyenne
                    </h1>
                    <div className="flex justify-start w-full">
                      <DataCircle unit="°C" value="23" />
                      <DataCircle unit="lx" value="250" />
                      <DataCircle
                        unit="élèves"
                        value={studentAverageValue + "/50"}
                      />
                      <DataCircle
                        unit="Occupation"
                        value={`${(100 * studentAverageValue) / 50}%`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-2/6 w-full m-2 mb-0 rounded-lg bg-white card-shadow flex items-center justify-start px-6 py-8">
              <div className="w-full h-full flex items-center flex-col">
                <h1 className="text-gray-700 text-3xl font-medium mb-4">
                  Gestion
                </h1>
                <div className="w-full h-full flex justify-between">
                  <div className="mr-12 w-64 flex items-center flex-col">
                    <h1 className="text-gray-700 text-2xl font-medium mb-6 text-center">
                      Température:
                    </h1>
                    <Knob
                      value={tempValue}
                      valueColor={"#6668F5"}
                      size={160}
                      min={18}
                      max={26}
                      valueTemplate={"{value}°"}
                      onChange={(e) => setTempValue(e.value)}
                    />
                  </div>

                  <div className="mr-12 w-64 flex items-center flex-col">
                    <h1 className="text-gray-700 text-2xl font-medium mb-6 text-center">
                      Luminosité:
                    </h1>
                    <Knob
                      value={lightValue}
                      valueColor={"#6668F5"}
                      size={160}
                      min={0}
                      max={400}
                      valueTemplate={"{value} LX"}
                      onChange={(e) => setLightValue(e.value)}
                    />
                  </div>

                  <div className="mr-12 flex">
                    <div>
                      <div className="flex items-center justify-between mb-4 w-64">
                        <h1 className="text-gray-700 text-2xl font-medium mr-4">
                          Projecteur:
                        </h1>
                        <InputSwitch
                          checked={projectorValue}
                          onChange={(e) => {
                            setProjectorValue(e.value);
                            sucessMessage();
                          }}
                        />
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <h1 className="text-gray-700 text-2xl font-medium mr-4">
                          Climatisation:
                        </h1>
                        <InputSwitch
                          checked={fanValue}
                          onChange={(e) => {
                            setFanValue(e.value);
                            sucessMessage();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
