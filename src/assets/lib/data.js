import { jsx as _jsx } from "react/jsx-runtime";
import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import giticon from "../../assets/icons/giticon.svg";
import postmanicon from "../../assets/icons/postmanicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import flotto_mockup from "../../assets/img/flotto_mockup.png";
import gallery_mockup from "../../assets/img/gallery_mockup.png";
import eventcountdown_mockup from "../../assets/img/eventcountdown_mockup.png";
import fbi_mockup from "../../assets/img/fbi_mockup.png";
import biasguessr_mockup from "../../assets/img/biasguessr._mockup.png";
import vercelicon from "../../assets/icons/vercelicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
export const headerIntroData = {
    title: {
        en: "Hi, I'm Jing",
    },
    roles: [" Web Designer.", " UI/UX Designer.", " student.", "n orange."],
    subtitle: "Web Designer",
    description: {
        en: "I specialize in crafting web experiences that balance aesthetic appeal with accessibility, usability, and user experience.",
    },
    buttons: [
        {
            name: "Contact",
            label: {
                en: "Contact me",
            },
            icon: FiMail,
            color: "main-btn",
        },
        {
            name: "Projects",
            label: {
                en: "My Projects",
            },
            icon: FiGithub,
            color: "secondary-btn",
        },
    ],
    profilepicture: profilepicture,
};
export const projectsData = [{
    title: "BiasGuessr",
    description: "",
    description_EN: "Guess the K-POP (or western) artists with your voice. A web app that allows users to a play a game of guess the celebrity. It uses voice recognition to detect the right spoken answer. There are two game modes, one for K-POP fans and one for those that aren't, which instead tests on western celebrities. Play the game using the demo link below. Mobile recommended!",
    technologies: [{ name: "React", icon: reacticon },
        { name: "Html", icon: htmlicon },
        { name: "CSS", icon: cssicon },
        { name: "JavaScript", icon: javascripticon },
        { name: "REST Api", icon: apiicon },
        { name: "node.js", icon: nodejsicon }, { name: "MongoDB", icon: mongodbicon },
        {name:"postman", icon:postmanicon},
        { name: "Express", icon: expressiconwhite },
        { name: "Vercel", icon: vercelicon },
    ],
    image: biasguessr_mockup,
    deploymenturl: "https://www.biasguessr.co/",
    githuburl: "https://github.com/IndexDuo/WingHacks2024",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
    },
},
    {
        title: "FBI Most Wanted",
        description: "",
        description_EN: "A web application that allows users to search for FBI's most wanted criminals. The app uses the FBI's public API to fetch the data and display it in a user-friendly way. The app is made at ShellHacks 2023.",
        technologies: [
            { name: "Html", icon: htmlicon },
            { name: "CSS", icon: cssicon },
            { name: "JavaScript", icon: javascripticon },
            { name: "REST Api", icon: apiicon },
            { name: "node.js", icon: nodejsicon },
            { name: "Vercel", icon: vercelicon },
        ],
        image: fbi_mockup,
        deploymenturl: "https://fbi-most-wanted-mu.vercel.app/",
        githuburl: "https://github.com/IndexDuo/FBI-Most-Wanted",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#70B9BE",
        },
    },
    {
        title: "Event Countdown App",
        description: "",
        description_EN: "A web application made with React-Native that allows the user to create a countdown for events and store the data locally. The user can also use it as a to-do list, but different from a to-do list, it tracks the countdown of the event. It provides the user a visual representation of how much time is left until either an event occurs or a to-do item is due.",
        technologies: [
            { name: "Html", icon: htmlicon },
            { name: "CSS", icon: cssicon },
            { name: "JavaScript", icon: javascripticon },
            { name: "React", icon: reacticon },
            { name: "React-Native", icon: reacticon },
        ],
        image: eventcountdown_mockup,
        deploymenturl: "https://indexduo.github.io/event-countdown/",
        githuburl: "https://github.com/IndexDuo/event-countdown",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#FFD5BD",
        },
    },
    {
        title: "Flotto",
        description: "",
        description_EN: "A Florida Lottery web application that allows users to search for the latest lottery numbers and jackpot amounts. Data was extracted from the Florida Lottery's official website, stored in a MongoDB database, and displayed in a user-friendly way. The app is made at KnightHacks 2023.",
        technologies: [
            { name: "Html", icon: htmlicon },
            { name: "CSS", icon: cssicon },
            { name: "JavaScript", icon: javascripticon },
            { name: "MongoDB", icon: mongodbicon },
            {name:"postman", icon:postmanicon},
            { name: "Express", icon: expressiconwhite },
            { name: "Node.js", icon: nodejsicon },
            { name: "REST Api", icon: apiicon },
            {name:"git", icon:giticon},
            {name:"tailwindcss", icon:tailwindcssicon},
        ],
        image: flotto_mockup,
        // deploymenturl: "",
        githuburl: "https://github.com/IndexDuo/Flotto",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#E3964A",
        },
    },
    {
        title: "Art Gallery Website",
        description: "",
        description_EN: "It is a simple art gallery website made with HTML and CSS. Media queries were used to make the website responsive (mobile and desktop).",
        technologies: [
            { name: "Html", icon: htmlicon },
            { name: "CSS", icon: cssicon }
        ],
        image: gallery_mockup, // Replace this with the path to your project's screenshot
        deploymenturl: "https://art-gallery-website-5z5wy54wm-jing-li-projects.vercel.app/",
        githuburl: "https://github.com/IndexDuo/ArtGalleryWebsite", // Update this with the correct GitHub repository if available
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#Insert_Color_Theme_of_Your_Project_Here", // Optional: Replace this with your project's primary color theme
        },
    }
    
];
export const liveTickerData = {
    content: {
        de: "Weitere Projekte auf Github",
        en: "More Projects on Github",
    },
};
export const skillsDataWeb = [
    {
        skillsTitle: "WebDevelopment",
        skills: [
            {
                title: "HTML",
                hash: "#html",
                icon: htmlicon,
                color: "#F1662A",
            },
            {
                title: "CSS",
                hash: "#CSS",
                icon: cssicon,
                color: "#1572B6",
            },
            {
                title: "JavaScript",
                hash: "#JavaScript",
                icon: javascripticon,
                color: "#F7DF1E",
            },
            // {
            //     title: "TypeScript",
            //     hash: "#TypeScript",
            //     icon: typescripticon,
            //     color: "#007ACC",
            // },
            {
                title: "React",
                hash: "#React",
                icon: reacticon,
                color: "#61DAFB",
            },
            {
                title: "Git",
                hash: "#Git",
                icon: giticon,
                color: ["#ff5555"],
            },
            {
                title: "Node.js",
                hash: "#Node.js",
                icon: nodejsicon,
                color: "#339933",
            },
            {
                title: "Tailwind",
                hash: "#Tailwind",
                icon: tailwindcssicon,
                color: "#38B2AC",
            },
            {
                title: "MongoDB",
                hash: "#MongoDB",
                icon: mongodbicon,
                color: "#449C45",
            },
            {
                title: "Docker",
                hash: "#Docker",
                icon: dockericon,
                color: "#2496ed",
            },
            {
                title: "Express",
                hash: "#Express",
                icon: [expressicon, expressiconwhite],
                color: ["#000000", "#FFFFFF"],
            },
            {title:"Postman", hash:"#Postman", icon:postmanicon, color:"#FF6C37"},
            {
                title: "SASS/SCSS",
                hash: "#SASS/SCSS",
                icon: sassscssicon,
                color: "#CC6699",
            },
        ],
    },
];
export const skillsDataDesign = [
    {
        skillsTitle: "Design",
        skills: [
            { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
            // {
            //     title: "Adobe XD",
            //     hash: "#Adobe XD",
            //     icon: adobexdicon,
            //     color: "#FF61F6",
            // },
            { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
        ],
    },
];
export const skillsDataCMS = [
    {
        skillsTitle: "CMS",
        skills: [
            {
                title: "WordPress",
                hash: "#WordPress",
                icon: wordpressicon,
                color: "#21759B",
            },
            // {
            //     title: "Shopify",
            //     hash: "#Shopify",
            //     icon: shopifyicon,
            //     color: "#7AB55C",
            // },
            // {
            //     title: "Webflow",
            //     hash: "#Webflow",
            //     icon: webflowicon,
            //     color: "#4353FF",
            // },
        ],
    },
];
export const navLinks = [
    { de: "Home", en: "Home", hash: "#home", icon: GoHome },
    { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
    { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
    { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
    { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
];
export const FooterLinks = [
    { de: "Impressum", en: "Imprint", hash: "#imprint", data: _jsx(Imprint, {}) },
    { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: _jsx(Privacy, {}) },
];
export const sideBarRightMail = {
    link: "mailto:jl.jing02123@gmail.com",
    text: "jl.jing02123@gmail.com",
};
export const sideBarLeftSocials = [
    {
        link: "https://www.linkedin.com/in/jing-l-24a8391b7/",
        icon: FiLinkedin,
        altimgname: "linkedin",
    },
    {
        link: "https://github.com/IndexDuo",
        icon: FiGithub,
        altimgname: "github",
    },
    {
        link: "mailto:jl.jing02123@gmail.om",
        icon: FiMail,
        altimgname: "mail",
    },
];
export const quotesData = [
    {
        de: '',
        en: `"Design isn't just what it looks like and feels like — design is how it works"`,
        author: "Steve Jobs, co-founder of Apple",
    },
    {
        de: '""',
        en: `"A user interface is like a joke. If you have to explain it, it’s not that good."`,
        author: "Martin LeBlanc, CEO and founder of IconFinder",
    },
];
export const aboutMeData = {
    title: "Über mich",
    title_EN: "About me",
    description: "Ein paar Codeschnippsel über mich",
    description_EN: "A few code snippets about me",
    paragraphs_DE: [
        {
            title: "",
            description: "",
            icon: hardwareicon,
        },
        {
            title: "",
            description: "",
            icon: caricon,
        },
        {
            title: "",
            description: "",
            icon: travelicon,
        },
    ],
    paragraphs_EN: [
        {
            title: "Theme Parks Adventurer",
            description: "I am a big fan of theme parks and roller coasters. I love the thrill of the ride and the adrenaline rush. I am always on the lookout for new parks and rides to experience.",
            icon: hardwareicon,
        },
        {
            title: "Cat Lover",
            description: "I am a cat lover and have a cat named Index. I was once a Nursery Care Technician at an animal shelter and have a lot of experience with taking care of new born kittens.",
            icon: caricon,
        },
        {
            title: "Learner and Perfectionist",
            description: "I am a learner and a perfectionist. I am always looking to improve my skills and learn new things. I am always looking for ways to improve my work and make it better.",
            icon: travelicon,
        },
    ],
};
export const contactData = {
    title: {
        de: "",
        en: "Contact",
    },
    description: {
        de: "",
        en: "Write me a message and I will get back to you.",
    },
    inputfields: [
        {
            name: "name",
            placeholder: {
                de: "",
                en: "Your Name",
            },
            type: "text",
            validation: {
                de: "",
                en: "Please fill in your name",
            },
            pattern: "{2}",
        },
        {
            name: "email",
            placeholder: {
                de: "",
                en: "Your E-Mail",
            },
            type: "email",
            validation: {
                de: "",
                en: "Please fill in your email",
            },
            pattern: "[@]{4}",
        },
        {
            name: "subject",
            placeholder: {
                de: "",
                en: "Your Subject",
            },
            type: "text",
            validation: {
                de: "",
                en: "Please fill in your subject",
            },
            pattern: "{10}",
        },
    ],
    textarea: {
        placeholder: {
            de: "",
            en: "Your Message",
        },
        name: "message",
        rows: 10,
        validation: {
            de: "",
            en: "Please fill in your message",
        },
        pattern: "{10}",
    },
    button: {
        value: {
            de: "",
            en: "Send",
        },
    },
    icon: FiMail,
    iconcolor: "#FFFFFF",
    colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
    },
    privacyOptIn: {
        checkbox: {
            de: "",
            en: "I agree that Jing may use my personal data (name and e-mail address) to contact me.",
        },
        description: {
            de: "",
            en: "By submitting this request, you acknowledge that you have read the Private Policy",
        },
    },
};
export const toastMessages = {
    loadingProject: {
        de: "",
        en: "🦄 The live demo may not be available at this time... Feel free to check out the project on Github!",
    },
    successEmailSent: {
        de: "",
        en: "🦄 Thank you for your email. I will get back to you as soon as possible",
    },
    failedEmailSent: {
        de: "",
        en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
    },
    failedValidationName: {
        de: "",
        en: "Please fill in your name",
    },
};
export const buttonLabels = {
    language: {
        de: "DE",
        en: "EN",
    },
};
export const directionStyles = {
    "outer-right-to-inner-left": {
        marginRight: "4rem",
    },
    "outer-left-to-inner-right": {
        marginLeft: "4rem",
        transform: "scaleX(-1)",
    },
    "inner-right-to-middle": {
        width: "100%",
        transform: "scaleY(1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    "inner-left-to-middle": {
        width: "100%",
        transform: "scaleX(-1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    "middle-to-inner-right": {
        width: "100%",
        transform: "scale(1,-1)",
    },
    "middle-to-inner-left": {
        width: "100%",
        transform: "scale(-1,-1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    middle: {
        width: "100%",
        transform: "scaleX(-1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
};
export const heightStyles = {
    small: {
        heights: ["25rem", "15rem"],
    },
    middle: {
        heights: ["35rem", "25rem"],
    },
    large: {
        heights: ["45rem", "35rem"],
    },
    extraLarge: {
        heights: ["55rem", "45rem"],
    },
};
export const spaceStyles = {
    "outer-right-to-inner-left": {
        marginTop: "-6rem",
        width: "100%",
    },
    "outer-left-to-inner-right": {
        marginTop: "-6rem",
        width: "100%",
    },
    "inner-right-to-middle": {
        marginTop: "-20rem",
        width: "50%",
        zIndex: "-10",
    },
    "inner-left-to-middle": {
        marginTop: "-10rem",
        width: "50%",
        zIndex: "-10",
    },
    "middle-to-inner-right": {
        width: "75%",
    },
    "middle-to-inner-left": {
        marginTop: "-2.5rem",
        width: "50%",
    },
    middle: {
        marginTop: "-2.5rem",
        width: "0%",
        display: "none",
    },
};
export const widthStyles = {
    "outer-right-to-inner-left": {
        widths: ["74.45%", "74.45%"],
    },
    "outer-left-to-inner-right": {
        widths: ["75%", "75%"],
    },
    "inner-right-to-middle": {
        widths: ["50.1%", "49%"],
    },
    "inner-left-to-middle": {
        widths: ["50.1%", "49%"],
    },
    "middle-to-inner-right": {
        widths: ["33.4%", "50.03%"],
    },
    "middle-to-inner-left": {
        widths: ["50.1%", "49%"],
    },
    middle: {
        widths: ["0%", "0%"],
    },
};
