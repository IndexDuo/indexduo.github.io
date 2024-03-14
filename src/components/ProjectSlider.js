import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData, toastMessages } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
const ProjectSlider = () => {
    const { ref } = useSectionInView("Projects");
    const { language } = useLanguage();
    const animationReference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["1 1", "1.3 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const notifyServerRequest = () => {
        if (language === "DE") {
            toast.info(toastMessages.loadingProject.de);
        }
        else {
            toast.info(toastMessages.loadingProject.en);
        }
    };
    return (_jsxs(React.Fragment, { children: [_jsxs("section", { className: " skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2 ", id: "projects", ref: ref, children: [_jsx(ToastContainer, { className: "w-max text-3xl block p-3 ", position: "bottom-center", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "light" }), _jsx("div", { className: "quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 ", style: {
                            backgroundImage: `url(${bannerBg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }, children: _jsxs("div", { className: "title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]", children: [_jsxs(motion.div, { ref: animationReference, style: {
                                        scale: scaleProgess,
                                        opacity: opacityProgess,
                                        textAlign: "center",
                                    }, children: [_jsxs("p", { className: "text-[--white] mt-16 mb-6", children: [_jsx("span", { className: "text-[--orange]", children: "<" }), language === "DE" ? "Projekte" : "Projects", _jsx("span", { className: "text-[--orange]", children: "/>" })] }), _jsx("h2", { className: "text-[--white] mb-16", children: language === "DE" ? "Meine Projekte" : "My Projects" })] }), _jsx(Swiper, { effect: "cards", grabCursor: true, modules: [EffectCards, Autoplay, Pagination], className: " w-[60vw] max-lg:hidden min-[1921px]:px-96", loop: true, autoplay: {
                                        delay: 4000,
                                        disableOnInteraction: true,
                                        pauseOnMouseEnter: true,
                                    }, pagination: {
                                        clickable: true,
                                    }, children: projectsData.map((project, index) => (_jsxs(SwiperSlide, { className: "quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-between  rounded-2xl p-20 text-left max-lg:hidden ", children: [_jsxs("div", { className: " w-[55%] flex flex-col gap-12 justify-between ", children: [_jsx("h2", { children: project.title }), _jsx("p", { className: "text-white", children: language === "DE"
                                                            ? project.description
                                                            : project.description_EN }), _jsxs("div", { className: "technologies", children: [_jsx("h3", { children: language === "DE" ? "Technologien" : "Technologies" }), _jsx("div", { className: "grid grid-cols-6 gap-10 p-4", children: project.technologies.map((technology, innerIndex) => (_jsx("img", { src: technology.icon, alt: `${project.title}-icon`, className: "h-[5rem] w-[60%] ", "data-tooltip-id": "my-tooltip", "data-tooltip-content": technology.name }, innerIndex))) })] }), _jsxs("div", { className: "buttons flex gap-10", children: [_jsx(Button, { label: "Live Demo", link: project.deploymenturl, iconSVG: project.deploymenticon, buttoncolor: project.colors.main, iconcolor: project.colors.icon, onClick: notifyServerRequest }), _jsx(Button, { label: "Github Repository", link: project.githuburl, iconSVG: project.githubicon, buttoncolor: project.colors.main, iconcolor: project.colors.icon })] })] }), _jsx("div", { className: "right-content relative h-[40rem] overflow-hidden rounded-xl w-[40%] transition-all duration-200 shadow-2xl", children: _jsx("img", { src: project.image, alt: `${project.title}-project-mockup`, className: `w-full h-auto transition-all duration-[6000ms] transform opacity-100 hover:translate-y-[-50%] 
                      ` }) })] }, index))) }), projectsData.map((project, index) => (_jsxs("article", { className: "bg-darkblue flex flex-col gap-10 w-[80%] h-full  border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]", children: [_jsx("h2", { className: "text-white", children: project.title }), _jsx("img", { src: project.image, alt: project.image, className: "h-[35vh] w-full object-cover object-top rounded-3xl" }), _jsxs("div", { className: "buttons flex gap-10 max-lg:flex-col", children: [_jsx(Button, { label: "Live Demo", link: project.deploymenturl, iconSVG: project.deploymenticon, buttoncolor: project.colors.main, iconcolor: project.colors.icon }), _jsx(Button, { label: "Github Repository", link: project.githuburl, iconSVG: project.githubicon, buttoncolor: project.colors.main, iconcolor: project.colors.icon })] }), _jsx("p", { className: "text-white  max-lg:text-4xl", children: language === "DE"
                                                ? project.description
                                                : project.description_EN }), _jsxs("div", { className: "technologies", children: [_jsx("h3", { className: "text-white", children: language === "DE" ? "Technologien" : "Technologies" }), _jsx("div", { className: "grid grid-cols-3 gap-10 p-4", children: project.technologies.map((technology, innerIndex) => (_jsx("img", { src: technology.icon, alt: `${project.title}-icon`, className: "h-[5rem] w-[60%] ", "data-tooltip-id": "my-tooltip", "data-tooltip-content": technology.name }, innerIndex))) })] })] }, index)))] }) }), _jsx(LiveTicker, {})] }), _jsx(ReactTooltip, { place: "top", id: "my-tooltip", style: {
                    fontSize: "1.5rem",
                    backgroundColor: "var(--orange)",
                } })] }));
};
export default ProjectSlider;
