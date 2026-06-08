import type { RefObject } from "react";
import type { CategoryProps, TileProductKeys } from "./types";

export const navLinks: string[] = ['home', 'tiles', 'contact', 'about']
export const tileLinks: string[] = ['indoor', 'outdoor', 'bathroom & kitchen slabs']
export const categories: CategoryProps[] = [
    { title: 'indoor tiles', includes: 'wall, bathroom, floor tiles...', page: '/tiles/indoor' },
    { title: 'outdoor tiles', includes: 'backyard, frontyard, fascade, patio...', page: '/tiles/outdoor' },
    { title: 'bathroom & kitchen slabs', includes: 'besides sink, platform...', page: '/tiles/slabs' },
]
export const homePillTabs = ['indoor', 'outdoor', 'bathroom & kitchen',]
export const indoorPills = ['all', 'glossy', 'ultra high glossy', 'matt series', 'carving series', 'carving decor', 'diamond collection', 'granula', 'rustic punch', 'statuario', 'rainbow']

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
    {
        id: 7,
        name: "Statuary White Marble",
        sizes: ["6mm", "9mm", "12mm"],
        type: "indoor",
        desc: "A beautiful setup of tiles",
        quality: "luxury",
        category: "indoor",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 8,
        name: "Rustic Slate Grey",
        sizes: ["9mm", "12mm"],
        type: "outdoor",
        desc: "A beautiful setup of tiles",

        quality: "budget",
        category: "outdoor",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 9,
        name: "Calacatta Gold Quartz",
        sizes: ["12mm"],
        type: "slabs",
        desc: "A beautiful setup of tiles",

        quality: "luxury",
        category: " slabs",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 10,
        name: "Statuary White Marble",
        sizes: ["6mm", "9mm", "12mm"],
        type: "indoor",
        desc: "A beautiful setup of tiles",
        quality: "luxury",
        category: "indoor",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 11,
        name: "Rustic Slate Grey",
        sizes: ["9mm", "12mm"],
        type: "outdoor",
        desc: "A beautiful setup of tiles",

        quality: "budget",
        category: "outdoor",
        imageUrl: "banner-3.jpeg"
    },
    {
        id: 12,
        name: "Calacatta Gold Quartz",
        sizes: ["12mm"],
        type: "slabs",
        desc: "A beautiful setup of tiles",

        quality: "luxury",
        category: " slabs",
        imageUrl: "banner-3.jpeg"
    },
];
export const indoorProducts: TileProductKeys[] = [
    // 1. GLOSSY
    {
        id: 1,
        name: "Liquid Amber Polish",
        sizes: ["6mm", "9mm", "12mm"],
        type: "Indoor",
        desc: "High-reflection vitrified tile with a deep, mirror-like amber glaze.",
        quality: "Premium",
        category: "glossy",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 2,
        name: "Crystal White Gloss",
        sizes: ["6mm", "9mm"],
        type: "Indoor",
        desc: "Classic stark white gloss finish designed to maximize ambient lighting.",
        quality: "Standard",
        category: "glossy",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 2. ULTRA HIGH GLOSSY
    {
        id: 3,
        name: "Obsidian Mirror",
        sizes: ["9mm", "12mm"],
        type: "Indoor",
        desc: "Ultra-high gloss glaze delivering an uncompromised, zero-distortion reflective finish.",
        quality: "Luxury",
        category: "ultra high glossy",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 4,
        name: "Super Vitrified Platinum",
        sizes: ["6mm", "9mm", "12mm"],
        type: "Indoor",
        desc: "Advanced protective coating over an ultra-glossy surface for heavy residential foot traffic.",
        quality: "Premium",
        category: "ultra high glossy",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 3. MATT SERIES
    {
        id: 5,
        name: "Concrete Ash Matt",
        sizes: ["6mm", "9mm"],
        type: "Indoor",
        desc: "Understated industrial concrete style with a slip-resistant matt texture.",
        quality: "Standard",
        category: "matt series",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 6,
        name: "Soft Charcoal Matt",
        sizes: ["9mm", "12mm"],
        type: "Indoor",
        desc: "Sleek, glare-free dark slate finish providing high traction and easy cleaning.",
        quality: "Premium",
        category: "matt series",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 4. CARVING SERIES
    {
        id: 7,
        name: "Veinwood Oak Carved",
        sizes: ["9mm", "12mm"],
        type: "Indoor",
        desc: "Features microscopic linear incisions that trace natural timber grain routes.",
        quality: "Premium",
        category: "carving series",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 8,
        name: "Silk Route Ivory",
        sizes: ["6mm", "9mm"],
        type: "Indoor",
        desc: "Delicate surface carving structures that shimmer softly under targeted spotlighting.",
        quality: "Premium",
        category: "carving series",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 5. CARVING DECOR
    {
        id: 9,
        name: "Geometric Mandala Carve",
        sizes: ["6mm", "9mm", "12mm"],
        type: "Indoor",
        desc: "Intricate, repetitive relief patterns etched directly into high-grade porcelain.",
        quality: "Luxury",
        category: "carving decor",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 10,
        name: "Vintage Damask Relief",
        sizes: ["6mm", "9mm"],
        type: "Indoor",
        desc: "Classical ornamental motifs enhanced with modern surface carving mechanics.",
        quality: "Premium",
        category: "carving decor",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 6. DIAMOND COLLECTION
    {
        id: 11,
        name: "Adamas Sparkle",
        sizes: ["9mm", "12mm"],
        type: "Indoor",
        desc: "Infused with crystalline granules that mimic natural gemstone light-refraction.",
        quality: "Luxury",
        category: "diamond collection",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 12,
        name: "Quartzite Shimmer Luxe",
        sizes: ["6mm", "9mm", "12mm"],
        type: "Indoor",
        desc: "Diamond-grade hardness scratch-resistant coating featuring subtle luminous flecks.",
        quality: "Luxury",
        category: "diamond collection",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 7. GRANULA
    {
        id: 13,
        name: "Sandstone Granula Grey",
        sizes: ["9mm", "12mm"],
        type: "Indoor",
        desc: "Homogeneous speckling profile delivering a structured granulate stone aesthetic.",
        quality: "Standard",
        category: "granula",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 14,
        name: "Granite Fleck Beige",
        sizes: ["6mm", "9mm"],
        type: "Indoor",
        desc: "Multi-tonal micro-granules fired uniformly for rugged dependability.",
        quality: "Premium",
        category: "granula",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 8. RUSTIC PUNCH
    {
        id: 15,
        name: "Tuscan Terracotta Punch",
        sizes: ["9mm", "12mm"],
        type: "Indoor",
        desc: "Heavy structural unevenness (punch) replicating weather-worn ancient European stone.",
        quality: "Standard",
        category: "rustic punch",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 16,
        name: "Ironclad Oxide Punch",
        sizes: ["6mm", "9mm", "12mm"],
        type: "Indoor",
        desc: "Deep pits and rough textures mimicking corroded metallic plates.",
        quality: "Premium",
        category: "rustic punch",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 9. STATUARIO
    {
        id: 17,
        name: "Statuario Imperial",
        sizes: ["6mm", "9mm", "12mm"],
        type: "Indoor",
        desc: "Bold, stark grey structural veins flowing organically across a milk-white base.",
        quality: "Luxury",
        category: "statuario",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 18,
        name: "Classic Statuario Venato",
        sizes: ["6mm", "9mm"],
        type: "Indoor",
        desc: "Fine, feathered marble fissures delivering a timeless luxury Italian architecture look.",
        quality: "Premium",
        category: "statuario",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // 10. RAINBOW
    {
        id: 19,
        name: "Spectrum Iridescent",
        sizes: ["6mm", "9mm", "12mm"],
        type: "Indoor",
        desc: "Fired with a subtle, multi-chromatic metallic sheen that shifts colors depending on your viewing angle.",
        quality: "Luxury",
        category: "rainbow",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: 20,
        name: "Aurora Pastel Streak",
        sizes: ["6mm", "9mm"],
        type: "Indoor",
        desc: "Soft, flowing linear gradients blending warm and cool pastel hues together dynamically.",
        quality: "Premium",
        category: "rainbow",
        imageUrl: "banner-3.jpeg",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
]

export const quoteText = `Best quality, wide range of products, trusted, and end-to-end pre and post sales service.`
export const quote2Text = `We deliver to all major states of Australia. (multiple options)`
export const homeBannerText = `If you're looking for the best tiles in Australia, you're at the right place.`
export const indoorBannerText = `Find the best tiles for your indoor setting`


export const scrollSection = (refElement: RefObject<HTMLDivElement | null>) => {
    if (refElement && refElement.current) refElement.current.scrollIntoView({ behavior: 'smooth' })
}


