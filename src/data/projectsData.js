import p3 from "../assets/images/p3.webp";
import p4 from "../assets/images/p4.webp";
import hd1 from "../assets/images/hd1.png";
import hd2 from "../assets/images/hd2.png";

export const projectsData = [
    {
        id: 0,
        name: "Instagram Clone",
        description: "Simple Instagram clone. For the frontend part, I've used React with TailwindCSS and Typescript, and for backend - Ruby on Rails. Project also contains tests for the backend written in Minitest.",
        images: [p3,p4],
        githubLink: "https://github.com/krystiano13/instagram-clone-app"
    },
    {
        id: 1,
        name: "FlashCard App",
        description: "Mobile app created with Capacitor.js - framework that allows to create mobile apps with frontend technologies (I used React, Typescript and TailwindCSS). I am currently in process of publishing it to Google Play.\n",
        images: [],
        githubLink: "https://github.com/krystiano13/flashcard-app"
    },
    {
        id: 2,
        name: "Hospital doors",
        description: "Hospital doors is simple survival horror game made in Gdevelop with help of Magica Voxel for Brackeys' Game Jam." +
                     "Your objective is to find 7 keys and escape from the location, but you need to be aware of monsters roaming around the map.",
        images: [hd1,hd2],
        githubLink: "",
        itchLink: "https://crystiano.itch.io/hospitaldoors"
    },
];