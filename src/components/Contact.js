import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL_Formspree || "";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [cursor, setCursor] = useState("");
    const [lastUpdatedField, setLastUpdatedField] = useState(null);
    const { ref } = useSectionInView("Contact");
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [error, setError] = useState(null);
    const animationReference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const notifySentForm = async (e) => {
        setError(null);
        console.log(error);
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            console.log(data + " " + apiBaseUrl);
            const response = await axios.post(apiBaseUrl, data);
            console.log(response);
            if (language === "DE") {
                toast.success(toastMessages.successEmailSent.de);
            }
            else {
                toast.success(toastMessages.successEmailSent.en);
            }
        }
        catch (error) {
            console.log(error);
            if (language === "DE") {
                toast.error(toastMessages.failedEmailSent.de);
            }
            else {
                toast.error(toastMessages.failedEmailSent.en);
            }
            setError("An Error occured, try again later");
        }
    };
    const handleInputFocus = (fieldName) => {
        setCursor(`${fieldName}${cursor}`);
    };
    const wordWrap = (text, maxLineLength, indentation) => {
        const words = text.split(" ");
        let lines = [];
        let currentLine = "";
        words.forEach((word) => {
            if (currentLine.length + word.length <= maxLineLength) {
                currentLine += word + " ";
            }
            else {
                lines.push(currentLine.trim());
                currentLine = `${indentation}${word} `;
            }
        });
        if (currentLine) {
            lines.push(currentLine.trim());
        }
        return lines.join("\n");
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        }
        else if (name === "email") {
            setEmail(value);
        }
        else if (name === "subject") {
            setSubject(value);
        }
        else if (name === "message") {
            setMessage(value);
        }
        setLastUpdatedField(name);
    };
    const [cursorBlink, setCursorBlink] = useState(true);
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setCursorBlink((prev) => !prev);
        }, 400);
        return () => {
            clearInterval(blinkInterval);
        };
    }, []);
    const codeSnippet = `
import  { useState } from "react";

// 🌈 Spreading Stardust: 
// Crafting Cosmic Email 🌌

const [sender, setSender] = "${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}🚀";
const [recipient, setRecipient] = "${email}${lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""}📧";
const [subject, setSubject] = \n"${subject}${lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""}✨";
const [message, setMessage] = 
\`Hello, intrepid traveler! 👋\n
Across the cosmos, a message for you:\n
"${wordWrap(message, 40, " ")}${lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""}"\n
Wishing you stardust dreams,\n
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
\``;
    //   const codeSnippet2 = `
    // // 🚀 Initiating Quantum Email Transmission 🪐
    // const launchEmail = async () => {
    //   try {
    //     const response = await fetch('https://alpaycelik.dev/send',{
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //      sender,
    //      recipient,
    //      subject,
    //      message
    //     })
    //    });
    //    if (response.ok) {
    //    console.log('🌌 Transmission successful!');
    //    } else {
    //    console.error('🌠 Cosmic glitch encountered...');
    //    }
    //   } catch (error) {
    //   console.error('🌪 Quantum disturbance detected:', error);
    //   }
    // };
    // // 🚀 Ready for Liftoff? 🛸
    // launchEmail();`;
    return (_jsx(React.Fragment, { children: _jsxs("section", { className: "contact-container w-full min-[1921px]:px-[55rem] mt-16", id: "contact", children: [_jsx("div", { className: "title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16", ref: ref, children: _jsxs(motion.div, { ref: animationReference, style: {
                            scale: scaleProgess,
                            opacity: opacityProgess,
                            textAlign: "center",
                        }, children: [_jsxs("p", { className: "text-[--black] mb-6", children: [_jsx("span", { className: "text-[--orange]", children: "<" }), language === "DE" ? contactData.title.de : contactData.title.en, _jsx("span", { className: "text-[--orange]", children: "/>" })] }), _jsx("h2", { className: "text-[--black] text-center", children: language === "DE"
                                    ? contactData.description.de
                                    : contactData.description.en })] }) }), _jsxs("div", { className: "flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10", children: [_jsx("div", { className: "w-1/2  bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress", children: _jsx(Highlight, { code: codeSnippet, language: "tsx", theme: themes.nightOwl, children: ({ className, style, tokens, getLineProps, getTokenProps }) => (_jsx("pre", { className: `${className} text-4xl `, style: style, children: tokens.map((line, i) => (_jsx("div", { ...getLineProps({ line, key: i }), children: line.map((token, key) => (_jsx("span", { ...getTokenProps({ token, key }) }))) }))) })) }) }), _jsxs("form", { className: "flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10", onSubmit: notifySentForm, autoComplete: "off", children: [contactData.inputfields.map((input, index) => (_jsx("input", { type: input.type, placeholder: language === "DE"
                                        ? `${input.placeholder.de}`
                                        : `${input.placeholder.en}`, name: input.name, value: input.name === "name"
                                        ? name
                                        : input.name === "email"
                                            ? email
                                            : input.name === "subject"
                                                ? subject
                                                : message, required: true, onFocus: () => {
                                        handleInputFocus(input.name);
                                        setLastUpdatedField(input.name);
                                    }, onMouseEnter: () => {
                                        handleInputFocus(input.name);
                                        setLastUpdatedField(input.name);
                                    }, onChange: handleInputChange, className: `${theme === "dark"
                                        ? "bg-[--blackblue] dark-mode-shadow "
                                        : "bg-[--icewhite] dark-shadow "}` }, index))), _jsx("textarea", { rows: contactData.textarea.rows, placeholder: language === "DE"
                                        ? `${contactData.textarea.placeholder.de}`
                                        : `${contactData.textarea.placeholder.en}`, name: contactData.textarea.name, onFocus: () => {
                                        handleInputFocus(contactData.textarea.name);
                                        setLastUpdatedField(contactData.textarea.name);
                                    }, onMouseEnter: () => {
                                        handleInputFocus(contactData.textarea.name);
                                        setLastUpdatedField(contactData.textarea.name);
                                    }, onChange: handleInputChange, className: `${theme === "dark"
                                        ? "bg-[--blackblue] dark-mode-shadow"
                                        : "bg-[--icewhite] dark-shadow"}` }), _jsxs("div", { className: "privacy-checkbox flex gap-16", children: [_jsxs("label", { className: "block w-2 h-2 cursor-pointer", htmlFor: "checkbox-label", children: [_jsx("input", { type: "checkbox", required: true, name: "checkbox-label", id: "checkbox-label" }), _jsx("span", { className: "checkbox" })] }), _jsx("p", { children: language === "DE"
                                                ? `${contactData.privacyOptIn.checkbox.de}`
                                                : `${contactData.privacyOptIn.checkbox.en}` })] }), _jsx("p", { children: language === "DE"
                                        ? `${contactData.privacyOptIn.description.de}`
                                        : `${contactData.privacyOptIn.description.en}` }), _jsx(Button, { value: language === "DE"
                                        ? `${contactData.button.value.de}`
                                        : `${contactData.button.value.en}`, iconSVG: contactData.icon, buttoncolor: contactData.colors.main, iconcolor: contactData.colors.icon, type: "submit", elementType: "input" }), _jsx(ToastContainer, { className: "w-max text-3xl block p-3 max-lg:w-full ", position: "bottom-center", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: theme })] })] })] }) }));
};
export default Contact;
