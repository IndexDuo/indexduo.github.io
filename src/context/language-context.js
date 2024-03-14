import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, createContext, useContext } from "react";
const LanguageContext = createContext(null);
export default function LanguageContextProvider({ children, }) {
    const [language, setLanguage] = useState("EN");
    const toggleLanguage = () => {
        if (language === "EN") {
            setLanguage("DE");
            window.localStorage.setItem("language", "DE");
            document.documentElement.classList.add("DE");
        }
        else {
            setLanguage("EN");
            window.localStorage.setItem("language", "EN");
            document.documentElement.classList.remove("DE");
        }
    };
    useEffect(() => {
        const localLanguage = window.localStorage.getItem("language");
        if (localLanguage) {
            setLanguage(localLanguage);
            if (localLanguage === "DE") {
                document.documentElement.classList.add("DE");
            }
        }
        else if (window.matchMedia("(prefers-color-scheme: DE)").matches) {
            setLanguage("DE");
            document.documentElement.classList.add("DE");
        }
    }, []);
    return (_jsx(LanguageContext.Provider, { value: {
            language,
            toggleLanguage,
        }, children: children }));
}
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === null) {
        throw new Error("useLanguage must be used within a LanguageContextProvider");
    }
    return context;
}
