import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { widthStyles, spaceStyles, heightStyles, directionStyles, } from "../assets/lib/data";
const Divider = ({ direction, color, thickness, height, dividerStyle, }) => {
    const borderStyle = {
        borderColor: `var(--${color})`,
        borderStyle: `${dividerStyle}`,
    };
    const heightStyle = heightStyles[height];
    const directionStyle = directionStyles[direction];
    const spaceStyle = spaceStyles[direction];
    const widthStyle = widthStyles[direction];
    return (_jsxs("div", { style: directionStyle, className: "relative", children: [_jsx("div", { className: "flex justify-end mb-10 ", style: { height: heightStyle?.heights[0], ...spaceStyle }, children: _jsx("div", { className: "h-full", style: {
                        ...borderStyle,
                        borderRightWidth: thickness,
                        borderBottomWidth: thickness,
                        width: widthStyle?.widths[0],
                    } }) }), _jsx("div", { className: "flex justify-end -mt-10", style: { height: heightStyle?.heights[1] }, children: _jsx("div", { className: "h-full", style: {
                        ...borderStyle,
                        borderLeftWidth: thickness,
                        width: widthStyle?.widths[1],
                    } }) })] }));
};
export default Divider;
