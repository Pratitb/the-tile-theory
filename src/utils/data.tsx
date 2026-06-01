import { GoHome } from "react-icons/go";
import type { CategoryProps, NavLinkKeys, TileProductKeys } from "./types";
import { MdContacts } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { GiPlatform } from "react-icons/gi";


export const navLinks: NavLinkKeys[] = [
    { name: 'home', icon: <GoHome /> },
    { name: 'tiles', icon: <GiPlatform /> },
    { name: 'contact', icon: <MdContacts /> },
    { name: 'about', icon: <FaRegBuilding /> },
]
export const categories: CategoryProps[] = [
    { title: 'indoor tiles', includes: 'wall, bathroom, floor tiles...' },
    { title: 'outdoor tiles', includes: 'backyard, frontyard, fascade, patio...' },
    { title: 'bathroom & kitchen slabs', includes: 'besides sink, platform...' },
    // { title: 'bathroom slabs', includes: 'besides sink, platform...' },
]
export const homePillTabs = ['indoor', 'outdoor', 'bathroom & kitchen',]

export const tileProducts: TileProductKeys[] = [
    {
        id: 1,
        name: "Statuary White Marble",
        sizes: ["6mm", "9mm", "12mm"],
        type: "indoor",
        desc: "A beautiful setup of tiles",
        quality: "luxury",
        category: "indoor",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 2,
        name: "Rustic Slate Grey",
        sizes: ["9mm", "12mm"],
        type: "outdoor",
        desc: "A beautiful setup of tiles",

        quality: "budget",
        category: "outdoor",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 3,
        name: "Calacatta Gold Quartz",
        sizes: ["12mm"],
        type: "slabs",
        desc: "A beautiful setup of tiles",

        quality: "luxury",
        category: " slabs",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 4,
        name: "Arctic Blue Gloss",
        sizes: ["6mm", "9mm"],
        type: "slabs",
        desc: "A beautiful setup of tiles",

        quality: "premium",
        category: "slabs",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 5,
        name: "Terrazzo Earth-Tone",
        sizes: ["9mm"],
        type: "indoor",
        desc: "A beautiful setup of tiles",

        quality: "premium",
        category: "indoor",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 6,
        name: "Concrete Ash Paver",
        sizes: ["12mm"],
        type: "outdoor",
        desc: "A beautiful setup of tiles",

        quality: "budget",
        category: "outdoor",
        imageUrl: "banner-3.jpeg"
    },
    // {
    //     id: 7,
    //     name: "Midnight Granite",
    //     sizes: ["12mm"],
    //     type: "kitchen slabs",
    //     desc: "A beautiful setup of tiles",

    //     quality: "luxury",
    //     category: "kitchen slabs",
    //     imageUrl: "banner-3.jpeg"
    // },
    // {
    //     id: 8,
    //     name: "Sandstone Matte",
    //     sizes: ["6mm", "9mm"],
    //     type: "bathroom slabs",
    //     desc: "A beautiful setup of tiles",

    //     quality: "budget",
    //     category: "bathroom slabs",
    //     imageUrl: "banner-3.jpeg"
    // }
];

export const quoteText = `Best quality, wide range of products, trusted, and end-to-end pre and post sales service.`
export const quote2Text = `We deliver to all major states of Australia. (multiple options)`


