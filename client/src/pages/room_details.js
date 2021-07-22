import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import ProgressSpinner from "../components/ProgressSpinner/ProgressSpinner";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  const history = useHistory();

  useEffect(() => {
    setInterval(() => setCurrentDate(new Date().toLocaleString()), 1000);

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
    }
  });

  return (
    <div>
      {loading === true ? (
        <ProgressSpinner />
      ) : (
        <div className="flex justify-between px-6 py-8 h-screen fadeIn">
          <div className="flex flex-col w-min">
            <div className="bg-gray-200 w-full lg:max-w-sm flex flex-col h-3/6 px-6 pt-8 mb-2 rounded-lg">
              <h1 className="text-gray-700 text-2xl font-medium">
                Salle: {room.name}
              </h1>
              <span className="flex flex-row items-center my-2">
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

            </div>

            <div className="bg-gray-200 w-full lg:max-w-sm flex flex-col h-3/6 px-6 pt-8 rounded-lg">
              <h1 className="text-gray-700 text-2xl font-medium">
                Notifications
              </h1>
            </div>
          </div>

          <div className="flex w-full flex-col m-8 my-0">
            <div className="h-4/6 w-full m-2 mt-0 rounded-lg bg-gray-200 flex items-center justify-center px-6 py-8">
              <div className="w-full h-full flex items-center flex-col">
                <h1 className="text-gray-700 text-3xl font-medium mb-4">
                  Vue d'ensemble
                </h1>

                <div className="flex items-center justify-between w-full h-full">
                  <div class="max-w-sm h-full w-2/6 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mx-4">
                    Lumière
                  </div>

                  <div class="max-w-sm h-full w-2/6 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mx-4">
                    Temperature
                  </div>

                  <div class="max-w-sm h-full w-2/6 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mx-4">
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
