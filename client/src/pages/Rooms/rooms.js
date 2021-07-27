import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressSpinner from "../../components/ProgressSpinner/ProgressSpinner";

import axios from "axios";
import { Tooltip } from "primereact/tooltip";

const Rooms = () => {
  const [allRooms, setAllRooms] = useState(null);
  const [loading, setIsLoading] = useState(true);

  const getAllRooms = () => {
    if (allRooms === null) {
      axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/rooms/`,
      }).then((res) => {
        setAllRooms(res.data);
        setIsLoading(false);
        document.title = "Liste des salles";
      });
    }
  };

  const handleCapacityColor = (value) => {
    let roomStyle = "h-44 w-44 m-8 flex items-center justify-center rounded-lg fill-current cursor-pointer";

    if (value < 25) {
      return `${roomStyle} bg-indigo-200`;
    } else if (value >= 25 && value < 50) {
      return `${roomStyle} bg-indigo-400`;
    } else if (value >= 50 && value < 80) {
      return `${roomStyle} bg-indigo-600`;
    } else if (value >= 80 && value < 90) {
      return `${roomStyle} bg-indigo-700`;
    } else if (value >= 90 && value < 100) {
      return `${roomStyle} bg-indigo-800`;
    } else if (value >= 100) {
      return `${roomStyle} bg-indigo-900 border-solid border-8 border-red-500 `;
    } else {
      return `${roomStyle} bg-black`;
    }
  };

  const history = useHistory();

  const redirectToRoom = (id) => {
    history.push("/rooms/" + id);
  }


  useEffect(() => {
    getAllRooms();
  });

  return (
    <div>
      {loading === true ? (
        <ProgressSpinner />
      ) : (
        <div className="px-6 py-8 h-screen fadeIn">
          <Tooltip target=".h-44" mouseTrack mouseTrackLeft={10} />

          <h1 className="text-gray-700 text-3xl font-medium">
            Liste des salles{" "}
            <span className="text-xl">({allRooms.length})</span>
          </h1>

          <div className="w-full flex flex-wrap justify-evenly">
            {allRooms.map((room, index) => (
              <div
                key={index}
                className={handleCapacityColor(
                  ((100 * room.total_present_students) / room.capacity).toFixed(
                    0
                  )
                )}
                data-pr-tooltip={`${room.name} \n (${(
                  (100 * room.total_present_students) /
                  room.capacity
                ).toFixed(0)}% d'occupation)`}
                onClick={() => redirectToRoom(room.id)}
              >
                <p className="text-white text-4xl font-bold">{room.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
