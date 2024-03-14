import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, FooterLinks } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import Popup from "reactjs-popup";
import { VscChromeClose } from "react-icons/vsc";
const LazyServiceStatus = lazy(() => import("../components/ServiceStatus"));
const Footer = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    return (_jsxs("footer", { className: "bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]", children: [_jsx("div", { className: "flex gap-10", children: FooterLinks.map((link, index) => (_jsx(Popup, { trigger: _jsx(Link, { to: "#", className: "text-white text-2xl font-bold hover:text-orange", children: language === "DE" ? link.de : link.en }), modal: true, children: (close) => (_jsx(_Fragment, { children: _jsxs("div", { className: `p-32 max-lg:p-16  rounded-3xl dark-shadow relative max-h-[80vh] overflow-y-auto ${theme === "dark" ? "bg-darkblue" : "bg-white"}`, children: [_jsx("button", { className: "fixed top-0 right-0 bg-orange p-4 z-10 rounded-2xl m-4 hover:bg-lightblue transition-all duration-500 dark-shadow text-white", onClick: () => {
                                        close();
                                    }, children: _jsx(VscChromeClose, {}) }), link.data] }) })) }, index))) }), _jsx("div", { className: "socials flex gap-10 ", children: sideBarLeftSocials.map((social, index) => (_jsx(Link, { to: social.link, className: "block mb-2 ", target: "_blank", rel: "noopener noreferrer", "aria-current": social.altimgname === "true"
                        ? social.altimgname + " button"
                        : social.altimgname + " button", children: typeof social.icon === "function" ? (_jsx(social.icon, { className: `stroke-orange` })) : (_jsx("img", { src: social.icon, alt: social.altimgname, style: { stroke: social.iconcolor || "" } })) }, index))) }), _jsx("div", { children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(LazyServiceStatus, {}) }) })] }));
};
export default Footer;
