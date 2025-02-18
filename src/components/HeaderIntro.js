import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";

const HeaderIntro = () => {
    const { language } = useLanguage();
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return _jsxs("section", {
        className:
            "hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6",
        ref: ref,
        id: "home",
        children: [
            _jsx(RadialGradient, {
                scale: "scale-y-125",
                opacity: "opacity-30",
            }),
            _jsx("img", {
                src: headerIntroData.profilepicture,
                alt: headerIntroData.profilepicture,
                className:
                    "w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4",
            }),
            _jsxs("h1", {
                children: [
                    language === "DE"
                        ? headerIntroData.title.de
                        : headerIntroData.title.en,
                    _jsx("div", {
                        className: "emoji-container",
                        children: _jsx("span", {
                            className: "cat-walk text-7xl",
                            children: "\uD83D\uDC08",
                        }),
                    }),
                ],
            }),
            _jsx("h2", {
                className:
                    "text-center max-lg:text-5xl max-lg:px-8 text-animation",
                children: headerIntroData.subtitle,
            }),
            _jsx("p", {
                className: "w-1/2 text-center max-lg:hidden",
                children:
                    language === "DE"
                        ? headerIntroData.description.de
                        : headerIntroData.description.en,
            }),
            _jsx("div", {
                className:
                    "button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center",
                children: headerIntroData.buttons.map((button, index) =>
                    button.externalUrl ? (
                        // External button (opens in new tab)
                        <a
                            key={index}
                            href={button.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn ${button.color} flex items-center gap-2 px-6 py-3 rounded-md transition-transform transform hover:scale-105`}
                        >
                            {button.icon && <button.icon className="text-xl" />}
                            {language === "DE"
                                ? button.label.de
                                : button.label.en}
                        </a>
                    ) : (
                        // Internal button (hash navigation)
                        <Button
                            key={index}
                            label={
                                language === "DE"
                                    ? button.label.de
                                    : button.label.en
                            }
                            iconSVG={button.icon}
                            link={`#${button.name.toLowerCase()}`}
                            buttoncolor={button.color}
                            onClick={() => {
                                setActiveSection(button.name);
                                setTimeOfLastClick(Date.now());
                            }}
                        />
                    )
                ),
            }),
            _jsx("div", {
                className: "scroll-down-container animate-bounce flex gap-6",
                children: _jsx(BsMouse, { className: "text-[2.6rem]" }),
            }),
        ],
    });
};

export default HeaderIntro;
