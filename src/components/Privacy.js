import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";
const Privacy = () => {
    const { language } = useLanguage();
    return (_jsx(React.Fragment, { children: language === "DE" ? (_jsx("article", { className: "flex flex-col gap-6 max-w-[70vw] break-words", children: _jsx("h1", { children: "Datenschutz\u00ADerkl\u00E4rung" }) })) : (_jsx("article", { className: "flex flex-col gap-6 max-w-[70vw] break-words", children: _jsx("h1", { children: "Privacy Policy" }) })) }));
};
export default Privacy;
