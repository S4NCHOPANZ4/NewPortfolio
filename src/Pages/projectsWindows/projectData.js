import caseJoltIcon from "../../assets/icons/CaseJolt-Icon.png"
import FitHubIcon from "../../assets/icons/FItHub-Icon.png"
import FilmFolia from "../../assets/icons/filmfolia-Icon.png"
import StereoHIcon from "../../assets/icons/Stereoh-Icon.png"

//Backgrounds
import caseJoltBg from  "../../assets/icons/projectBgs/CaseJolt.png"
import FitHubImg from "../../assets/icons/projectBgs/FitHubBg.png"
import stereoHImg from "../../assets/icons/projectBgs/stereo.png"
import filmFolia from "../../assets/icons/projectBgs/FilmFolia.png"

export default {
    caseJolt:{
    id: 0,
    name: "Case Jolt",
    icon: caseJoltIcon,
    icons: ["React", "Typescript", "NodeJs", "MongoDB", "Tailwind"],
    backgound: caseJoltBg,
    desc:`Page based on Counter Strike lootboxes, it has a login using the
    official Valve accounts returning official user data and real Steam
    market.
    React application in TypeScript, powered by a Node.js server. It
    employs Tailwind CSS and CSS for styling, ensuring a sleek and
    responsive design. The project optimizes performance through
    asynchronous loading logic.`,
    url: "https://github.com/S4NCHOPANZ4/SteamLink",
    demo: "https://casejolt.vercel.app",
},
fitHub:{
    id: 1,
    name: "FitHub",
    icon: FitHubIcon,
    icons: ["React", "Typescript", "Tailwind", "Api"],
    backgound: FitHubImg, 
    desc:`This page is an ideal wiki to manage and lead the adventure through the gym with guides, 
    BMI meters, daily calorie counter, etc... React TypeScript and adorned with the elegance of 
    Tailwind CSS. This application is powered by not one, not two, but three different APIs, 
    perfectly integrated to offer an unparalleled fitness experience.`,
    url: "https://github.com/S4NCHOPANZ4/FitHub",
    demo: "https://fit-hub-taupe.vercel.app"
},
FilmFolia:{
    id: 2,
    name: "FilmFolia",
    icon: FilmFolia,
    icons: ["React", "Typescript", "NodeJs", "MongoDB", "Tailwind"],
    backgound: filmFolia, 
    desc:`Imagine a forum where you can open review discussions and give your opinion about any movie you want, this is the place.
    React App that seamlessly merges MongoDB, Tailwind CSS, Node.js and Express, creating a space where movie fans around the world
    can share their thoughts and discussions.`,
    url: "https://github.com/S4NCHOPANZ4/FilmFolia",
    demo: "https://film-folia.vercel.app"
},
Stereo:{
    id: 3,
    name: "Stereo Hearth",
    icon: StereoHIcon,
    icons: ["React", "Javascript", "Api", "Tailwind"],
    backgound: stereoHImg, 
    desc:`This page offers a Spotify clone with various styles and distribution Combining the power of React, JavaScript, and Tailwind, 
    we harness the Shazam Core API to craft an immersive audio discovery platform. Elevate your music experience and explore tracks seamlessly,
    redefining audio exploration, just like Spotify`,
    url: "https://github.com/S4NCHOPANZ4/StereoHeart",
    demo: "https://stereo-heart.vercel.app"
},

}