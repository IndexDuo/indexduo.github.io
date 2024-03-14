import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { sideBarLeftSocials } from "../assets/lib/data";
const SiteBarLeft = () => {
    return (_jsxs("div", { className: "absolute flex items-center flex-col justify-center top-0 left-0 ml-8 max-lg:h-[10%] max-lg:ml-4", id: "home", children: [_jsx("div", { className: "flex items-center justify-center flex-col", children: _jsx("div", { className: "w-[0.25rem] h-[40vh] bg-[--lightblue]" }) }), _jsx("div", { className: "flex flex-col gap-4 mt-4", children: sideBarLeftSocials.map((social, index) => (_jsx(Link, { to: social.link, className: "block mb-2 hover:scale-110", target: "_blank", rel: "noopener noreferrer", "aria-current": social.altimgname === "true"
                        ? social.altimgname
                        : social.altimgname + " button", children: typeof social.icon === "function" ? (_jsx(social.icon, { className: `stroke-orange` })) : (_jsx("img", { src: social.icon, alt: social.altimgname, style: { stroke: social.iconcolor } })) }, index))) })] }));
};
export default SiteBarLeft;
