import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavBar from "../components/NavBar";
const Layout = ({ children }) => {
    return (_jsxs("div", { className: "z-10", children: [_jsx(NavBar, {}), children] }));
};
export default Layout;
