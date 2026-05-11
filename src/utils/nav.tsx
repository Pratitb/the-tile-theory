import { GoHome } from "react-icons/go";
import type { NavLinkKeys } from "./types";
import { MdContacts } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { GiPlatform } from "react-icons/gi";


export const navLinks: NavLinkKeys[] = [
    { name: 'home', icon: <GoHome /> },
    { name: 'tiles', icon: <GiPlatform /> },
    { name: 'contact', icon: <MdContacts /> },
    { name: 'about', icon: <FaRegBuilding /> },
]