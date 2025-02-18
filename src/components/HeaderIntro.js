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
                    button.externalUrl
                        ? _jsx(
                              "a",
                              {
                                  href: button.externalUrl,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "no-underline",
                                  children: _jsxs("button", {
                                      className:
                                          "text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer main-btn shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-xl",
                                      children: [
                                          _jsx(button.icon, {
                                              className: "w-max h-10",
                                          }),
                                          _jsx("span", {
                                              children:
                                                  language === "DE"
                                                      ? button.label.de
                                                      : button.label.en,
                                          }),
                                      ],
                                  }),
                              },
                              index
                          )
                        : _jsx(
                              Button,
                              {
                                  label:
                                      language === "DE"
                                          ? button.label.de
                                          : button.label.en,
                                  iconSVG: button.icon,
                                  link: `#${button.name.toLocaleLowerCase()}`,
                                  buttoncolor: button.color,
                                  onClick: () => {
                                      setActiveSection(button.name);
                                      setTimeOfLastClick(Date.now());
                                  },
                              },
                              index
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
