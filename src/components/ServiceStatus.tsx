// import { JSX as _JSX, JSXS as _JSJS } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ServiceStatus = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
      async function getStatusData() {
          try {
              const response = await axios.get('https://www.indexduo.me/api/status');
              const statusPageData = response.data.statusPages[0].attributes.aggregate_state;
              setStatus(statusPageData);
          } catch (error) {
              console.error("Failed to get status from backend:", error);
          }
      }
      getStatusData();
  }, []);

  const statusColor = () => {
      switch (status) {
          case "operational":
              return "!text-green-500";
          case "downtime":
              return "!text-yellow-500";
          case "degraded":
              return "!text-red-500";
          default:
              return "!text-gray-500"; // Fallback color
      }
  };

  const iconColor = () => {
      switch (status) {
          case "operational":
              return "bg-green-500";
          case "downtime":
              return "bg-yellow-500";
          case "degraded":
              return "bg-red-500";
          default:
              return "bg-gray-500"; // Fallback color
      }
  };
    return (
        <React.Fragment>
            <Link to="https://status.indexduo.me">
                <div className="status p-4 rounded-xl flex flex-row items-center">
                    <div className="status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4">
                        <div className={`status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${iconColor()} rounded-[inherit]`}></div>
                        <div className={`status-icon-wave w-[inherit] h-[inherit] rounded-[inherit] ${iconColor()} animate-ping`}></div>
                    </div>
                    <p className={`status-text ${statusColor()}`}>
                        {"Status: " + status}
                    </p>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default ServiceStatus;
