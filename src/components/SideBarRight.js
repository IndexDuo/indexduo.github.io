import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { sideBarRightMail } from "../assets/lib/data";
const SiteBarLeft = () => {
    return (_jsxs("div", { className: "absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[50vh] max-lg:hidden ", children: [_jsx("div", { className: " h-[65%] w-[4rem] flex items-center justify-center ", children: _jsx(Link, { to: sideBarRightMail.link, className: " text-gray-700 mb-2 [writing-mode:vertical-lr] absolute top-0 right-0  h-[50%] text-[--orange] hover:text-[--lightblue] transition-all duration-200 ", children: sideBarRightMail.text }) }), _jsx("div", { className: "flex items-center justify-center flex-col h-[70%] ", children: _jsx("div", { className: " w-[0.25rem] h-[100%] bg-[--lightblue]" }) })] }));
};
export default SiteBarLeft;
