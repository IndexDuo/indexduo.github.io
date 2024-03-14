import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";
const Imprint = () => {
    const { language } = useLanguage();
    return (_jsx(React.Fragment, { children: language === "DE" ? (_jsx("article", { className: "flex flex-col gap-6 max-w-[70vw]", children: _jsx("h1", { children: "Impressum" }) })) : (_jsx("article", { className: "flex flex-col gap-6 max-w-[70vw]", children: _jsx("h1", { children: "Site Notice" }) })) }));
};
export default Imprint;
