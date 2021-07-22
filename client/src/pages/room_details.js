import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import ProgressSpinner from "../components/ProgressSpinner/ProgressSpinner";
import Notification from "../components/Notification/Notification";
import Select from "../components/Select/Select";


const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [allRooms, setAllRooms] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  const notifications = [
    {
      label: "La température de la salle est idéale !",
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
    setInterval(() => setCurrentDate(new Date().toLocaleString()), 1000);
  };

  const redirectTo = (id) => {
    history.push("/rooms/" + id);

    // Meh
    window.location.reload();
  };

  const history = useHistory();

  useEffect(() => {
    if (room === null) {
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
                <p>X élèves</p>
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
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-lg mr-2"
                  style={{
                    color: "rgb(161, 98, 230)",
                  }}
                />
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
            <div className="h-4/6 w-full m-2 mt-0 rounded-lg bg-gray-200 flex items-center justify-center px-6 py-8">
              <div className="w-full h-full flex items-center flex-col">
                <h1 className="text-gray-700 text-3xl font-medium mb-4">
                  Vue d'ensemble
                </h1>

                <div className="flex items-center justify-between w-full h-full">
                  <div className="max-w-sm h-full w-2/6 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mx-4">
                    Lumière
                  </div>

                  <div className="max-w-sm h-full w-2/6 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mx-4">
                    Temperature
                  </div>

                  <div className="max-w-sm h-full w-2/6 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mx-4">
                    Autre
                  </div>
                </div>
              </div>
            </div>

            <div className="h-2/6 w-full m-2 mb-0 rounded-lg bg-gray-200 flex items-center justify-center px-6 py-8">
              <div className="w-full h-full flex items-center flex-col">
                <h1 className="text-gray-700 text-3xl font-medium mb-4">
                  Gestion
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
