import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import me from "../assets/img/me.webp";
import { aboutMeData } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
const AboutMe = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const { ref } = useSectionInView("About me");
    const { language } = useLanguage();
    const animationReference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const onAutoplayTimeLeft = (_s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty("--progress", String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    const paragraphs = language === "DE" ? aboutMeData.paragraphs_DE : aboutMeData.paragraphs_EN;
    return (_jsx(React.Fragment, { children: _jsxs("section", { className: "about-me relative mt-16 ", id: "about-me", ref: ref, children: [_jsx("div", { className: "title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start", children: _jsxs(motion.div, { ref: animationReference, style: {
                            scale: scaleProgess,
                            opacity: opacityProgess,
                            textAlign: "left",
                        }, children: [_jsxs("p", { className: "text-[--black] mb-6", children: [_jsx("span", { className: "text-orange", children: "<" }), language === "DE" ? aboutMeData.title : aboutMeData.title_EN, _jsx("span", { className: "text-orange", children: "/>" })] }), _jsx("h2", { className: "text-[--black] text-center max-lg:text-left break-words", children: language === "DE"
                                    ? aboutMeData.description
                                    : aboutMeData.description_EN })] }) }), _jsxs("div", { className: "flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16  max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48", children: [_jsx("article", { className: "pl-60 max-lg:p-0", children: _jsx("img", { src: me, alt: me }) }), _jsxs(Swiper, { spaceBetween: 100, centeredSlides: true, autoplay: {
                                delay: 10000,
                                disableOnInteraction: false,
                            }, pagination: {
                                clickable: true,
                            }, modules: [Autoplay, Pagination, Navigation], onAutoplayTimeLeft: onAutoplayTimeLeft, className: "w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2", children: [paragraphs.map((paragraph, index) => (_jsxs(SwiperSlide, { className: "bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab", children: [_jsxs("div", { className: "flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ", children: [_jsx("div", { children: _jsx("img", { src: paragraph.icon, alt: paragraph.icon, className: "w-24" }) }), _jsx("div", { children: _jsx("h2", { children: paragraph.title }) })] }), _jsxs("div", { className: "flex flex-row gap-10 max-lg:flex-col", children: [_jsxs("div", { className: "flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0", children: [_jsxs("p", { className: "text-white", children: [_jsx("span", { className: "text-orange", children: "<" }), "h3", _jsx("span", { className: "text-orange", children: "/>" })] }), _jsxs("div", { className: "flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue", children: [_jsx("div", {}), _jsx("div", { className: "w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]" }), _jsx("div", {})] }), _jsxs("p", { className: "text-white", children: [_jsx("span", { className: "text-orange", children: "<" }), "h3", _jsx("span", { className: "text-orange", children: "/>" })] })] }), _jsx("div", { children: _jsx("p", { className: "text-white text-4xl", children: paragraph.description }) })] })] }, index))), _jsxs("div", { className: "autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-orange text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl ", slot: "container-end", children: [_jsx("svg", { viewBox: "0 0 48 48", ref: progressCircle, children: _jsx("circle", { cx: "24", cy: "24", r: "20" }) }), _jsx("span", { ref: progressContent })] })] })] })] }) }));
};
export default AboutMe;
