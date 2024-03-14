import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import bannerBg from "../assets/img/bannerbg.webp";
import { quotesData } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
import { useQuoteAnimation } from "../hooks/useQuoteAnimation";
const BannerQuote = ({ style, quoteIndex, containerType, }) => {
    const { language } = useLanguage();
    const quoteTranslation = language === "DE" ? quotesData[quoteIndex].de : quotesData[quoteIndex].en;
    useQuoteAnimation(`.${containerType}-container h2`);
    return style === "withBG" ? (_jsx(React.Fragment, { children: _jsx("section", { className: "quote-banner relative overflow-x-clip z-[1]", children: _jsx("div", { className: "quote-outer-container bg-[--darkblue] h-[50vh] -rotate-3 flex justify-center items-center scale-110 max-lg:h-full min-[1921px]:px-96", style: {
                    backgroundImage: `url(${bannerBg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }, children: _jsxs("div", { className: "quote-container rotate-3 flex items-center flex-col justify-center p-56 max-lg:p-20 ", children: [_jsx("h2", { className: "text-[--white] text-center text-8xl mb-20 mt-20 max-lg:text-[3rem] max-lg:mb-10 max-lg:leading-tight", children: quoteTranslation }), _jsx("p", { className: "text-[--grey]", children: quotesData[0].author })] }) }) }) })) : (_jsx(React.Fragment, { children: _jsx("section", { className: "quote-banner relative overflow-x-clip min-[1921px]:px-96", children: _jsx("div", { className: "h-[50vh] -rotate-3 flex justify-center items-center scale-110", children: _jsx("div", { className: "statement-container rotate-3 flex items-center flex-col justify-center p-56 max-lg:p-20", children: _jsx("h2", { className: "text-[--black] text-center text-9xl mb-20 mt-20 max-lg:text-[3rem] max-lg:mb-10 max-lg:leading-tight", children: quoteTranslation }) }) }) }) }));
};
export default BannerQuote;
