import { GoHome } from "react-icons/go";
import type { CategoryProps, NavLinkKeys } from "./types";
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

export const homePillTabs = ['indoor', 'outdoor', 'kitchen', 'bathroom']