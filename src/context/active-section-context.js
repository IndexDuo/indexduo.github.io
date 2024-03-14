import { jsx as _jsx } from "react/jsx-runtime";
import { useState, createContext, useContext } from "react";
export const ActiveSectionContext = createContext(null);
export default function ActiveSectionContextProvider({ children, }) {
    const [activeSection, setActiveSection] = useState("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    return (_jsx(ActiveSectionContext.Provider, { value: {
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
        }, children: children }));
}
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }
    return context;
}
