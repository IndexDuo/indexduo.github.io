import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import process from "process";
// import cors from 'cors';

const ServiceStatus = () => {
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function getStatusData() {
            try {
                const apiUrl = 'https://www.indexduo.me'; // Fallback URL
                const response = await axios.get(`${apiUrl}/api/status`);
                console.log(response.data);
                const statusPageData = response.data.statusPages[0].attributes.aggregate_state;
                setStatus(statusPageData);
                console.log(statusPageData)
                // console.log(statusPageData)
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
    return (_jsx(React.Fragment, { children: _jsx(Link, { to: "https://status.indexduo.me", children: _jsxs("div", { className: "status p-4 rounded-xl flex flex-row items-center", children: [_jsxs("div", { className: "status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4", children: [_jsx("div", { className: `status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${iconColor()} rounded-[inherit]` }), _jsx("div", { className: `status-icon-wave  w-[inherit] h-[inherit] rounded-[inherit] ${iconColor()}   animate-ping ` })] }), _jsxs("p", { className: `status-text ${statusColor()} `, children: ["Status: ", status] })] }) }) }));
};
export default ServiceStatus;
