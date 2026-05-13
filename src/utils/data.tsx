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
    { title: 'indoor', includes: 'wall, bathroom, floor tiles...' },
    { title: 'outdoor', includes: 'backyard, frontyard, fascade, patio...' },
    { title: 'kitchen slabs', includes: 'besides sink, platform...' },
    { title: 'bathroom slabs', includes: 'besides sink, platform...' },
]
export const homePillTabs = ['all', 'indoor', 'outdoor', 'kitchen', 'bathroom']

export const tileProducts: TileProductKeys[] = [
    {
        id: 1,
        name: "Statuary White Marble",
        sizes: ["6mm", "9mm", "12mm"],
        type: "indoor",
        quality: "luxury",
        category: "indoor",
        imageUrl: "/banner-3.jpeg"
    },
    {
        id: 2,
        name: "Rustic Slate Grey",
        sizes: ["9mm", "12mm"],
        type: "outdoor",
        quality: "budget",
        category: "outdoor",
        imageUrl: "/banner-3.jpeg"
    },
    {
        id: 3,
        name: "Calacatta Gold Quartz",
        sizes: ["12mm"],
        type: "kitchen slabs",
        quality: "luxury",
        category: "kitchen slabs",
        imageUrl: "/banner-3.jpeg"
    },
    {
        id: 4,
        name: "Arctic Blue Gloss",
        sizes: ["6mm", "9mm"],
        type: "bathroom slabs",
        quality: "premium",
        category: "bathroom slabs",
        imageUrl: "/banner-3.jpeg"
    },
    {
        id: 5,
        name: "Terrazzo Earth-Tone",
        sizes: ["9mm"],
        type: "indoor",
        quality: "premium",
        category: "indoor",
        imageUrl: "/banner-3.jpeg"
    },
    {
        id: 6,
        name: "Concrete Ash Paver",
        sizes: ["12mm"],
        type: "outdoor",
        quality: "budget",
        category: "outdoor",
        imageUrl: "/banner-3.jpeg"
    },
    {
        id: 7,
        name: "Midnight Granite",
        sizes: ["12mm"],
        type: "kitchen slabs",
        quality: "luxury",
        category: "kitchen slabs",
        imageUrl: "/banner-3.jpeg"
    },
    {
        id: 8,
        name: "Sandstone Matte",
        sizes: ["6mm", "9mm"],
        type: "bathroom slabs",
        quality: "budget",
        category: "bathroom slabs",
        imageUrl: "/banner-3.jpeg"
    }
];

export const quoteText = `Best quality, wide range of products, trust, and end to end pre and post sales service.`
export const quote2Text = `We deliver to all major states of Australia. (multiple options)`


