import type { RefObject } from "react";
import type { CategoryProps, Tabkeys, TileLinks, TileProductKeys } from "./types";
import { FaBusinessTime, FaCircleCheck } from "react-icons/fa6";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { IoSparklesSharp } from "react-icons/io5";

// HOME

// bottom banner
export const quoteText = `Best quality, wide range of products, trusted, and end-to-end pre and post sales service.`
export const quote2Text = `We deliver to all major states of Australia. (multiple options)`

// export const homeBannerText1 = `If you're looking for the`
export const homeBannerText2 = `Australia's Destination for Premium Tiles.`
export const homeBannerText3 = `Excellent quality meets intelligent pricing. Explore more.`

export const navLinks: string[] = ['home', 'tiles', 'contact', 'about']
export const tileLinks: TileLinks[] = [{ name: 'indoor', path: '/tiles/indoor' }, { name: 'outdoor', path: '/tiles/outdoor' }, { name: 'kitchen & bathroom slabs', path: '/tiles/slabs' }]
export const homePillTabs = ['indoor', 'outdoor', 'kitchen & bathroom',]

export const categories: CategoryProps[] = [
    { title: 'indoor tiles', includes: 'wall, bathroom, floor tiles...', page: '/tiles/indoor' },
    { title: 'outdoor tiles', includes: 'backyard, frontyard, fascade, patio...', page: '/tiles/outdoor' },
    { title: 'kitchen & bathroom slabs', includes: 'besides sink, platform...', page: '/tiles/slabs' },
]
export const tileProducts: TileProductKeys[] = [
    // indoor
    {
        id: 1,
        name: "Glossy Vol 2",
        type: "indoor",
        desc: "Mirror-like brilliance that reflects light to make spaces feel larger.",

        quality: "premium",
        category: "indoor",
        imageUrl: "applications/indoor-1.png"
    },
    {
        id: 2,
        name: "Statuary White Marble",
        type: "indoor",
        desc: "Classic white marble aesthetics with iconic, sweeping grey veining.",
        quality: "premium",
        category: "indoor",
        imageUrl: "applications/indoor-2.png"
    },

    // outdoor
    {
        id: 3,
        name: "Granite",
        type: "outdoor",
        desc: "Raw concrete and heavy stone-look tiles designed for modern outdoor living",

        quality: "budget",
        category: "outdoor",
        imageUrl: "applications/outdoor-1.png"
    },
    {
        id: 4,
        name: "Luna",
        type: "outdoor",
        desc: "A selection of sandstone-inspired tiles featuring soft quartz grains and warm, earthy tones.",

        quality: "budget",
        category: "outdoor",
        imageUrl: "applications/outdoor-2.png"
    },
    // slabs
    {
        id: 5,
        name: "Marmi Chiari",
        type: "slabs",
        desc: "A refined collection of light marble-effect tiles, featuring crisp white and cream bases",

        quality: "premium",
        category: " slabs",
        imageUrl: "applications/slabs-1.png"
    },
    {
        id: 6,
        name: "Marmi Chiari",
        sizes: ["6mm", "9mm"],
        type: "slabs",
        desc: "A refined collection of light marble-effect tiles, featuring crisp white and cream bases",

        quality: "premium",
        category: "slabs",
        imageUrl: "applications/slabs-2.png"
    },
];

// TILES
export const tiles1 = `welcome to`
export const indoorBanner2 = `indoor tiles.`
export const outdoorBanner2 = `outdoor tiles.`
export const slabs2 = `slab tiles.`
export const tiles3 = `find all types of premium tiles here.`

export const indoorPills = ['carving', 'diamond collection', 'glossy', 'granula', 'kitkat', 'limestone', 'linear', 'matt series', 'nexa', 'pizzaro', 'rustic', 'rainbow', 'weber',]
export const outdoorPills = ['decorative', 'stone', 'earthy', 'urban']
export const slabPills = ['marmi', 'calce']

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
export const outdoorProducts: TileProductKeys[] = [
    // 1. DECORATIVE
    {
        id: 1,
        name: "Decorative Featured",
        sizes: ["16mm", '20mm', '30mm'],
        type: "outdoor",
        desc: ".",
        quality: "premium",
        category: "decorative",
        imageUrl: "products/outdoor/decorative.png",
        pdfUrl: "catalogues/outdoor/ttt-decorative-featured.pdf"
    },

    // 2. STONE
    {
        id: 2,
        name: "Premium Stone Finishes",
        sizes: ["16mm", '20mm', '30mm'],
        type: "outdoor",
        desc: ".",
        quality: "premium",
        category: "stone",
        imageUrl: "products/outdoor/premium-stone.png",
        pdfUrl: "catalogues/outdoor/ttt-premium-stone-finishes.pdf"
    },

    // 3. EARTHY
    {
        id: 3,
        name: "Warm Earth Sandstone Look",
        sizes: ["16mm", '20mm', '30mm'],
        type: "outdoor",
        desc: ".",
        quality: "premium",
        category: "earthy",
        imageUrl: "products/outdoor/warm-earthy.png",
        pdfUrl: "catalogues/outdoor/ttt-warm-earth-sandstone-look.pdf"
    },
    // 4. URBAN
    {
        id: 4,
        name: "Urban Industrial Concrete",
        sizes: ["16mm", '20mm', '30mm'],
        type: "outdor",
        desc: ".",
        quality: "premium",
        category: "urban",
        imageUrl: "products/outdoor/urban.png",
        pdfUrl: "catalogues/outdoor/ttt-urban-industrial-concrete.pdf"
    },
]
export const slabProducts: TileProductKeys[] = [
    // 1. MAMRI
    {
        id: 1,
        name: "Marmi Scuri (Dark Marbles)",
        sizes: ["12mm", '15mm'],
        type: "slabs",
        desc: ".",
        quality: "premium",
        category: "marmi",
        imageUrl: "products/kitchen-bathroom/scuri.png",
        pdfUrl: "catalogues/kitchen-bathroom/ttt-marmi-scuri-dark-marbles.pdf"
    },
    {
        id: 2,
        name: "Marmi Nero (Black Marbles)",
        sizes: ["12mm", '15mm'],
        type: "slabs",
        desc: ".",
        quality: "premium",
        category: "marmi",
        imageUrl: "products/kitchen-bathroom/nero.png",
        pdfUrl: "catalogues/kitchen-bathroom/ttt-marmi-nero-black-marbles.pdf"
    },
    {
        id: 3,
        name: "Marmi Chiari (Light Marbles)",
        sizes: ["12mm", '15mm'],
        type: "slabs",
        desc: ".",
        quality: "premium",
        category: "marmi",
        imageUrl: "products/kitchen-bathroom/chiari.png",
        pdfUrl: "catalogues/kitchen-bathroom/ttt-marmi-chiari-light-marbles.pdf"
    },
    // 2. CALCE
    {
        id: 4,
        name: "Calce (Soft Concrete Looks)",
        sizes: ["12mm", '15mm',],
        type: "slabs",
        desc: ".",
        quality: "premium",
        category: "calce",
        imageUrl: "products/kitchen-bathroom/calce.png",
        pdfUrl: "catalogues/kitchen-bathroom/ttt-calce-soft-concrete looks.pdf"
    },
]

// CONTACT
export const contDesc = `Have a question about our collections, need styling advice, or want to check stock availability?`
export const contDesc2 = `The Tile Theory team is ready to assist you. Drop us a message using the form below, and one of our tile experts will get back to you as soon as possible to help bring your vision to life.`

export const contactTabs: Tabkeys[] = [{ name: 'query', desc: 'query' }, { name: 'quotation', desc: 'quotation' }]
export const formCategTabs = [{ name: 'indoor', desc: 'indoor' }, { name: 'outdoor', desc: 'outdoor' }, { name: 'kitchen & bathroom slabs', desc: 'kitchen & bathroom slabs' }]
export const formIndoorPills: Tabkeys[] = [
    { name: 'carving', desc: 'carving' },
    { name: 'diamond collection', desc: 'diamond collection' },
    { name: 'glossy', desc: 'glossy' },
    { name: 'granula', desc: 'granula' },
    { name: 'kitkat', desc: 'kitkat' },
    { name: 'limestone', desc: 'limestone' },
    { name: 'linear', desc: 'linear' },
    { name: 'matt series', desc: 'matt series' },
    { name: 'nexa', desc: 'nexa' },
    { name: 'pizzaro', desc: 'pizzaro' },
    { name: 'rustic', desc: 'rustic' },
    { name: 'rainbow', desc: 'rainbow' },
    { name: 'weber', desc: 'weber' }
]
export const formOutdoorPills: Tabkeys[] = [
    { name: 'decorative', desc: 'decorative' },
    { name: 'stone', desc: 'stone' },
    { name: 'earthy', desc: 'earthy' },
    { name: 'urban', desc: 'urban' }
]
export const formSlabPills: Tabkeys[] = [
    { name: 'marmi', desc: 'marmi' },
    { name: 'calce', desc: 'calce' }
]
export const indoorThickness: Tabkeys[] = [
    { name: '9mm', desc: '9mm' }
]
export const outdoorThickness: Tabkeys[] = [
    { name: '16mm', desc: '16mm' },
    { name: '20mm', desc: '20mm' },
    { name: '30mm', desc: '30mm' }
]
export const kitchenThickness: Tabkeys[] = [
    { name: '12mm', desc: '12mm' },
    { name: '15mm', desc: '15mm' }
]

// ABOUT
export const aboutBanner = `Our promise is simple:`
export const aboutBanner2 = `superior finish, strength, and aesthetic of luxury architectural tiles, but at a fraction of the cost`
export const ourStory = `At The Tile Theory, we believe that exceptional design should be accessible. For too long, creating a premium space has forced a difficult compromise: paying an absolute fortune for luxury, high-end surfaces, or sacrificing durability and finish with standard mass-market imports. We set out to change that.`

export const ourStory2 = `Thanks to our direct family connection to state-of-the-art manufacturing plants, we completely bypass the middleman and traditional supply chains.`

export const ourStory3 = `Working straight with the source allows us to offer an extensive variety of bespoke, customizable options at highly competitive rates that you won't find anywhere else.`
export const pillars = [
    { name: 'honest', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat corrupti temporibus eos consectetur vitae eligendi', icon: <PiMicrophoneStageFill /> },
    { name: 'trusted', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat corrupti temporibus eos consectetur vitae eligendi', icon: <FaCircleCheck /> },
    { name: 'premium', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat corrupti temporibus eos consectetur vitae eligendi', icon: <IoSparklesSharp /> },

    { name: 'on time', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat corrupti temporibus eos consectetur vitae eligendi', icon: <FaBusinessTime /> },

]

export const scrollSection = (refElement: RefObject<HTMLDivElement | null>) => {
    if (refElement && refElement.current) refElement.current.scrollIntoView({ behavior: 'smooth' })
}


