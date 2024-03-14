import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Button = ({ onClick, label, link, value, iconSVG: IconSVGComponent, buttoncolor, buttonhovercolor, type, elementType, }) => {
    const commonProps = {
        onClick,
        type,
        className: `text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer ${buttoncolor} ${buttonhovercolor} max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-xl
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`,
    };
    if (elementType === "input") {
        return _jsx("input", { ...commonProps, value: value });
    }
    else {
        return (_jsx(Link, { to: link || "", className: "no-underline", children: _jsxs("button", { ...commonProps, children: [IconSVGComponent ? (_jsx(IconSVGComponent, { className: "w-max h-10" })) : (_jsx("img", { src: buttoncolor || "", alt: `${label}-icon`, className: `bg-[${buttoncolor || ""}] w-16 ` })), label] }) }));
    }
};
export default Button;
