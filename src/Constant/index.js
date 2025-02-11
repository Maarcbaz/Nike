
import { bigShoe1, bigShoe2, bigShoe3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, customer1, customer2 } from "../../public/assets/images";
import { star, truckFast, shieldTick, support, facebook, twitter, instagram } from "../../public/assets/icons";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
    { value: 50, label: 'Brands' },
    { value: 500, label: 'Shops' },
    { value: 250, label: 'Customers' },
];

export const HomeText = [
    {
        about: "Our Summer collections",
        paragraph: "Discover stylish Nike arrivals, quality comfort, and innovation for your active life.",
        btn: "Shop now"
    }
]

export const shoesImg = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-001",
        price: "$200.20",
        starIcon: star,
        rating: 4.9
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-010",
        price: "$210.20",
        starIcon: star,
        rating: 4.3
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        starIcon: star,
        rating: 4.8
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-030",
        price: "$230.20",
        starIcon: star,
        rating: 4.6
    },
]

export const SuperQualities = [
    {
        paragraph1: "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.",
        paragraph2: "Our dedication to detail and excellence ensures your satisfaction",

    }
]

export const servicesItm = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const Offers = [
    {
        paragraph1: "Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.",
        paragraph2: "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.",
        btn1: "Shop now",
        btn2: "Learn more"
    }
]

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.6,
        Rstart: star,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.8,
        Rstart: star,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+2348119482391", link: "tel:+2348119482391" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
