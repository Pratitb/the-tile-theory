import type { RefObject } from "react";
import type { CategoryProps, TileLinks, TileProductKeys } from "./types";

export const quoteText = `Best quality, wide range of products, trusted, and end-to-end pre and post sales service.`
export const quote2Text = `We deliver to all major states of Australia. (multiple options)`
export const homeBannerText1 = `If you're looking for the`
export const homeBannerText2 = `best tiles in australia,`
export const homeBannerText3 = `you're at the right place.`
export const indoorBannerText = `Find the best tiles for your indoor setting`

export const tiles1 = `welcome to`
export const indoorBanner2 = `indoor tiles.`
export const outdoorBanner2 = `outdoor tiles.`
export const slabs2 = `slab tiles.`
export const tiles3 = `find all types of premium tiles here.`

export const navLinks: string[] = ['home', 'tiles', 'contact', 'about']
export const tileLinks: TileLinks[] = [{ name: 'indoor', path: '/tiles/indoor' }, { name: 'outdoor', path: '/tiles/outdoor' }, { name: 'kitchen & bathroom slabs', path: '/tiles/slabs' }]
export const homePillTabs = ['indoor', 'outdoor', 'kitchen & bathroom',]
export const indoorPills = [
    'all',
    'carving',
    'diamond collection',
    'glossy',
    'granula',
    'kitkat',
    'limestone',
    'linear',
    'matt series',
    'nexa',
    'pizzaro',
    'rustic',
    'rainbow',
    'weber',
]

export const categories: CategoryProps[] = [
    { title: 'indoor tiles', includes: 'wall, bathroom, floor tiles...', page: '/tiles/indoor' },
    { title: 'outdoor tiles', includes: 'backyard, frontyard, fascade, patio...', page: '/tiles/outdoor' },
    { title: 'kitchen & bathroom slabs', includes: 'besides sink, platform...', page: '/tiles/slabs' },
]
export const tileProducts: TileProductKeys[] = [
    {
        id: 1,
        name: "Statuary White Marble",
        sizes: ["6mm", "9mm", "12mm"],
        type: "indoor",
        desc: "A beautiful setup of tiles",
        quality: "premium",
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

        quality: "premium",
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


];
export const indoorProducts: TileProductKeys[] = [
    // 1. GLOSSY
    {
        id: 1,
        name: "glossy vol 1",
        sizes: ["9mm"],
        type: "Indoor",
        desc: "Mirror-like brilliance that reflects light to make spaces feel larger. The ultimate choice for a luxurious, high-end polished look.",
        quality: "Premium",
        category: "glossy",
        imageUrl: "products/indoor/glossy-1.png",
        pdfUrl: "catalogues/indoor/ttt-glossy-vol-1.pdf"
    },
    {
        id: 2,
        name: "glossy vol 2",
        sizes: ["9mm"],
        type: "Indoor",
        desc: "Mirror-like brilliance that reflects light to make spaces feel larger. The ultimate choice for a luxurious, high-end polished look.",
        quality: "premium",
        category: "glossy",
        imageUrl: "products/indoor/glossy-2.png",
        pdfUrl: "catalogues/indoor/ttt-glossy-vol-2.pdf"
    },
    {
        id: 3,
        name: "glossy vol 3",
        sizes: ["9mm"],
        type: "Indoor",
        desc: "Mirror-like brilliance that reflects light to make spaces feel larger. The ultimate choice for a luxurious, high-end polished look.",
        quality: "premium",
        category: "glossy",
        imageUrl: "products/indoor/glossy-3.png",
        pdfUrl: "catalogues/indoor/ttt-glossy-vol-3.pdf"
    },
    {
        id: 4,
        name: "ultra high glossy",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Mirror-like brilliance that reflects light to make spaces feel larger. The ultimate choice for a luxurious, high-end polished look.",
        quality: "premium",
        category: "glossy",
        imageUrl: "products/indoor/ultra-high-glossy.png",
        pdfUrl: "catalogues/indoor/ttt-ultra-high-glossy.pdf"
    },
    {
        id: 5,
        name: "glossy decor",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Mirror-like brilliance that reflects light to make spaces feel larger. The ultimate choice for a luxurious, high-end polished look.",
        quality: "Premium",
        category: "glossy",
        imageUrl: "products/indoor/glossy-decor.png",
        pdfUrl: "catalogues/indoor/ttt-glossy-decor.pdf"
    },

    // 2. MATT SERIES
    {
        id: 6,
        name: "matt",
        sizes: ["9mm"],
        type: "Indoor",
        desc: "A sophisticated, non-reflective surface that offers a soft touch. Perfect for contemporary interiors seeking a calm, understated elegance.",
        quality: "premium",
        category: "matt",
        imageUrl: "products/indoor/matt.png",
        pdfUrl: "catalogues/indoor/ttt-matt.pdf"
    },
    // 3. DIAMOND COLLECTION
    {
        id: 7,
        name: "diamond collection",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Features a unique geometric texture that captures light at every angle. Adds a distinct 3D architectural depth to feature walls and floors.",
        quality: "premium",
        category: "diamond",
        imageUrl: "products/indoor/diamond.png",
        pdfUrl: "catalogues/indoor/ttt-diamond-punch.pdf"
    },
    // 4. KITKAT PUNCH
    {
        id: 8,
        name: "kitkat punch",
        sizes: ["9mm"],
        type: "Indoor",
        desc: "Inspired by trendy mosaic strips, providing a sleek, rhythmic pattern. Ideal for modern backsplashes and bathroom accents with a slim profile.",
        quality: "premium",
        category: "kitkat",
        imageUrl: "products/indoor/kitkat.png",
        pdfUrl: "catalogues/indoor/ttt-kitkat-punch.pdf"
    },
    // 5. LIMESTONE PUNCH
    {
        id: 9,
        name: "limestone punch",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Replicates the raw, organic texture of natural quarried limestone. Brings an earthy, rustic charm with the durability of premium porcelain.",
        quality: "premium",
        category: "limestone",
        imageUrl: "products/indoor/limestone.png",
        pdfUrl: "catalogues/indoor/ttt-limestone-punch.pdf"
    },
    // 6. RAINBOW SERIES
    {
        id: 10,
        name: "rainbow series",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "A vibrant collection featuring a playful spectrum of tones and hues. Designed for creative spaces that need a bold, energetic personality.",
        quality: "premium",
        category: "rainbow",
        imageUrl: "products/indoor/rainbow.png",
        pdfUrl: "catalogues/indoor/ttt-rainbow-series.pdf"
    },
    // 7. STATUARIO
    {
        id: 11,
        name: "statuario",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Classic white marble aesthetics with iconic, sweeping grey veining. Timeless luxury that brings the prestige of Italian stone to your home.",
        quality: "premium",
        category: "statuario",
        imageUrl: "products/indoor/statuario.png",
        pdfUrl: "catalogues/indoor/ttt-statuario.pdf"
    },
    // 8. GRANULA
    {
        id: 12,
        name: "granula",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Characterized by fine, speckled grains for a rich, textured appearance. A versatile finish that masks wear while maintaining a premium feel.",
        quality: "premium",
        category: "granula",
        imageUrl: "products/indoor/granula.png",
        pdfUrl: "catalogues/indoor/ttt-granula.pdf"
    },
    // 9. NEXA
    {
        id: 13,
        name: "nexa punch",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Advanced precision textures that offer a sharp, high-definition finish. A futuristic choice for those seeking cutting-edge interior design.",
        quality: "premium",
        category: "nexa",
        imageUrl: "products/indoor/nexa.png",
        pdfUrl: "catalogues/indoor/ttt-nexa-punch.pdf"
    },
    // 10. PIZZARO
    {
        id: 14,
        name: "pizzaro punch",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Bold, deep-set textures inspired by rugged Mediterranean stone. Provides a strong tactile experience with a sophisticated, aged look.",
        quality: "premium",
        category: "pizzaro",
        imageUrl: "products/indoor/pizzaro.png",
        pdfUrl: "catalogues/indoor/ttt-pizzaro-punch.pdf"
    },
    // 11. WEBER
    {
        id: 15,
        name: "weber punch",
        sizes: ["9mm"],
        type: "Indoor",
        desc: "Subtle, refined indentations that create a gentle play of shadow. Perfectly balanced for large-scale flooring with a modern industrial edge.",
        quality: "premium",
        category: "weber",
        imageUrl: "products/indoor/weber.png",
        pdfUrl: "catalogues/indoor/ttt-weber-punch.pdf"
    },
    // 12. CARVING
    {
        id: 16,
        name: "carving decor",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Specialized \"vein- matching\" texture that follows the natural marble print. Feel the grooves of the stone for an incredibly realistic luxury finish.",
        quality: "premium",
        category: "carving",
        imageUrl: "products/indoor/carving-decor.png",
        pdfUrl: "catalogues/indoor/ttt-carving-decor.pdf"
    },
    {
        id: 17,
        name: "carving 1",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Specialized \"vein- matching\" texture that follows the natural marble print. Feel the grooves of the stone for an incredibly realistic luxury finish.",
        quality: "premium",
        category: "carving",
        imageUrl: "products/indoor/carving-1.png",
        pdfUrl: "catalogues/indoor/ttt-carving-1.pdf"
    },
    {
        id: 18,
        name: "carving 2",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Specialized \"vein- matching\" texture that follows the natural marble print. Feel the grooves of the stone for an incredibly realistic luxury finish.",
        quality: "premium",
        category: "carving",
        imageUrl: "products/indoor/carving-2.png",
        pdfUrl: "catalogues/indoor/ttt-carving-2.pdf"
    },
    {
        id: 19,
        name: "linear punch",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Clean, linear grooves that provide a sense of direction and height. Excellent for modernizing hallways or creating sleek bathroom walls.",
        quality: "premium",
        category: "linear",
        imageUrl: "products/indoor/linear.png",
        pdfUrl: "catalogues/indoor/ttt-linear-punch.pdf"
    },
    {
        id: 20,
        name: "rustic punch",
        sizes: ["9mm",],
        type: "Indoor",
        desc: "Weathered textures that celebrate the beauty of imperfection. Brings a cozy, farmhouse-style warmth to any indoor living area.",
        quality: "premium",
        category: "rustic",
        imageUrl: "products/indoor/rustic.png",
        pdfUrl: "catalogues/indoor/ttt-rustic-punch.pdf"
    },
]

export const scrollSection = (refElement: RefObject<HTMLDivElement | null>) => {
    if (refElement && refElement.current) refElement.current.scrollIntoView({ behavior: 'smooth' })
}


