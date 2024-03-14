import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { skillsDataCMS, skillsDataDesign, skillsDataWeb, } from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";
const TechStack = () => {
    const { ref } = useSectionInView("Skills");
    const { theme } = useTheme();
    const { language } = useLanguage();
    const animationReference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (_jsxs(React.Fragment, { children: [_jsxs("section", { className: "relative tech-stack max-lg:p-16 ", id: "skills", ref: ref, children: [_jsx(RadialGradient, { scale: "scale-y-[3]", opacity: theme === "light" ? "opacity-30" : "opacity-30", position: "top-[55rem]" }), _jsx("div", { className: "title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ", children: _jsxs(motion.div, { ref: animationReference, style: {
                                scale: scaleProgess,
                                opacity: opacityProgess,
                            }, children: [_jsxs("p", { className: "font-black mb-6", children: [_jsx("span", { className: "text-[--orange]", children: "<" }), "Skills", _jsx("span", { className: "text-[--orange]", children: "/>" })] }), _jsx("h2", { children: language === "DE"
                                        ? "Meine Techstack und Skills"
                                        : "My TechStack and Skills" })] }) }), _jsxs("div", { className: "flex gap-40 justify-center max-lg:flex-col", children: [_jsx("div", { className: "w-1/3 max-lg:w-full", children: _jsx(SkillSection, { skillsData: skillsDataWeb, theme: theme }) }), _jsxs("div", { className: "flex flex-col h-[inherit]  justify-around max-lg:gap-40", children: [_jsx(SkillSection, { skillsData: skillsDataDesign, theme: theme }), _jsx(SkillSection, { skillsData: skillsDataCMS, theme: theme })] })] })] }), _jsx(ReactTooltip, { place: "top", id: "my-tooltip", style: {
                    fontSize: "1.5rem",
                    zIndex: 10,
                    backgroundColor: "var(--orange)",
                } })] }));
};
export default TechStack;
