import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useLanguage } from "../context/language-context";
import { buttonLabels } from "../assets/lib/data";
const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguage();
    return (_jsx(React.Fragment, { children: _jsxs("div", { className: "language-switch-container", children: [_jsx("input", { className: "tgl tgl-style", id: "toggle-language", type: "checkbox", onChange: toggleLanguage, checked: language === "EN" }), _jsx("label", { className: "tgl-btn", htmlFor: "toggle-language", "data-tg-off": buttonLabels.language.de, "data-tg-on": buttonLabels.language.en })] }) }));
};
export default LanguageSwitch;
