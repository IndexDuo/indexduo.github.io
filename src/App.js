import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";
function App() {
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsx(ThemeContextProvider, { children: _jsx(LanguageContextProvider, { children: _jsx(ActiveSectionContextProvider, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/imprint", element: _jsx(Home, {}) }), _jsx(Route, { path: "/privacy", element: _jsx(Home, {}) })] }) }) }) }) }) }));
}
export default App;
