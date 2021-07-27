import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationTriangle, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const handleSeverityStyle = (severity) => {
  let notificationStyle =
    "flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md";
  switch (severity) {
    case "success":
      return `${notificationStyle} text-green-100 bg-green-700 border border-green-700`;
    case "warning":
      return `${notificationStyle} text-yellow-700 bg-yellow-100 border border-yellow-300`;
    case "error":
      return `${notificationStyle} text-red-100 bg-red-700 border border-red-700`;
    default:
      return `${notificationStyle} text-indigo-100 bg-indigo-700 border border-indigo-700`;
  }
};

const handleSeverityIcon = (severity) => {
  switch (severity) {
    case "success":
      return faCheckCircle;
    case "warning":
      return faExclamationTriangle;
    case "error":
      return faTimes;
    default:
      return faInfoCircle;
  }
};

const Notification = ({ label, severity }) => {
  return (
    <>
      <div className={handleSeverityStyle(severity)}>
        <div className="w-8 h-8 flex items-center justify-center mx-2 ml-0">
          <FontAwesomeIcon
            icon={handleSeverityIcon(severity)}
            className="text-lg"
          />
        </div>
        <div className="text-xl mr-2 font-normal w-full flex-initial">
          <div className="py-2">
            <div className="text-sm font-base">{label}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
