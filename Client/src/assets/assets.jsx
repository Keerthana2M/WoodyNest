import user from './user.png';
import door from './Door.webp';
import Main from "./Main_Banner.png";
import mobile from "./mobile_banner.png";
import arrow from "./arrow.png";
import warrow from "./arrow-w.png";
import searchImg from "./search.png";
import cart from "./shopping-cart.png";
import menu from "./menu.png";
import users from "./user.png";
import bed from './bed.webp';
import table from './Table.png';
import dine from './Dine.webp';
import swing from './swing.webp';
import wall from './wall.jpg';
import vasus from './vasus.jpg';
import express from './express-delivery.png';
import leaf from './leaf.png';
import coin from './money.png';
import trust from './trust.png';
import d1 from './Dine1.jpg';
import d2 from './Dine2.webp';
import d3 from './Dine3.jpg';
import d4 from './Dine4.jpg';
import d5 from './Dine5.jpg';
import d6 from './Dine6.jpg';
import d7 from './Dine7.avif';
import w1 from './wall1.jpg';
import star from './star.png';
import star_d from './star_d.png';
import banner from './B_Banner.png';
import banner_s from './Banner_sm.png';
import logo from './Woody.png';

export const assets = {
    user,
    door,
    Main,
    mobile,
    arrow,
    warrow,
    searchImg,
    cart,
    menu,
    users,
    bed,
    table,
    dine,
    swing,
    wall,
    vasus,
    express,
    leaf,
    coin,
    star,
    star_d,
    banner,
    banner_s,
    logo

}
export const Categories = [
    {
        text:"Door",
        path:"Door",
        image:door,
        bgColor:"#FEF6DA",
    },
     {
        text:"Bed",
        path:"Bed",
        image:bed,
        bgColor:"#FFEFE3",
    },
     {
        text:"Table",
        path:"Table",
        image:table,
        bgColor:"#FFF7C2",
    },
      {
        text:"Dine",
        path:"Dine",
        image:dine,
        bgColor:"#FFF0F3",
    },
      {
        text:"Swing",
        path:"Swing",
        image:swing,
        bgColor:"#F4F1FF",
    },
      {
        text:"Wall Shelf",
        path:"Wall",
        image:wall,
        bgColor:"#EEF5FF",
    },
      {
        text:"Vasus",
        path:"vasus",
        image:vasus,
        bgColor:"#EEF7F2",
    }
    
];

export const footerLinks = [
    {
        title:"Quick Links",
        links:[
        {text:"Home",url:"#"},
        {text:"Best Sellers",url:"#"},
        {text:"offer & Deals",url:"#"},
        {text:"Contact Us",url:"#"},
        {text:"FAQs",url:"#"},
    ],
  },
  {
        title:"Need help?",
        links:[
            {text :"Delivery Information",url:"#"},
            {text :"Return & Refund Policy",url:"#"},
            {text :"Payment methods",url:"#"},
            {text :"Track your order",url:"#"},
             {text :"Contact Us",url:"#"}, 
        ],
  },
  {
    title:"Follow Us",
    links:[
        {text:"Instagram",url:"#"},
        {text:"Twitter",url:"#"},
        {text:"Facebook",url:"#"},
        {text:"Youtube",url:"#"},
    ],
  },

];

export const features =[
    {
        icon:express,
        title:"Fastest Delivery",
        description:"Products delivered within 2 days",
    },
      {
        icon:leaf,
        title:"Made with Care",
        description:"Fresh Products",
    },
     {
        icon:coin,
        title:"Affordable price",
        description:"Quality products at affordable prices",
    },
    {
        icon:trust,
        title:"Trusted By Thousands",
        description:"Loved by 10,000+ happy customers",
    },
    ];
    export const dummyproducts = [
        {
            id:"gd46g23h",
            name:"Dining Table 4 seater ",
            Categories:"Dine",
            Price:20000,
            offerPrice:15000,
            image:[d1,d3,d4],
            description:[
                "Crafted from premium quality wood ",
                "Elegant design for modern dining spaces",
                "Smooth finish for a refined look",
            ],
            createdAT:"2025-12 25T07:12:08.018Z",
            updatedAT:"2025-12 25T07:2:08.103Z",
            inStock:true,
        },
           {
            id:"gd46g23h",
            name:"Dining Table -6 seater",
            Categories:"Dine",
            Price:30000,
            offerPrice:25000,
            image:[d6],
            description:[
                "Crafted from premium quality wood ",
                "Elegant design for modern dining spaces",
                "Smooth finish for a refined look",
            ],
            createdAT:"2025-12 25T07:12:08.018Z",
            updatedAT:"2025-12 25T07:2:08.103Z",
            inStock:true,
        },
        {
            id:"gd47g23h",
            name:"Dining Table -6 seater",
            Categories:"Dine",
            Price:30000,
            offerPrice:25000,
            image:[d2],
            description:[
                "Crafted from premium quality wood ",
                "Elegant design for modern dining spaces",
                "Smooth finish for a refined look",
            ],
            createdAT:"2025-12 25T07:12:08.018Z",
            updatedAT:"2025-12 25T07:2:08.103Z",
            inStock:true,
        },
         {
            id:"gd48g23h",
            name:"Table",
            Categories:"Table",
            Price:2500,
            offerPrice:5000,
            image:[table],
            description:[
                "Crafted from premium quality wood ",
                "Elegant design for modern dining spaces",
                "Smooth finish for a refined look",
            ],
            createdAT:"2025-11 25T07:12:08.017Z",
            updatedAT:"2025-11 25T07:2:08.143Z",
            inStock:true,
        },
         {
            id:"gd49g23h",
            name:"Wall Shelf",
            Categories:"Wall Shelf",
            Price:2500,
            offerPrice:5000,
            image:[w1],
            description:[
                "Crafted from premium quality wood ",
                "Elegant design for modern dining spaces",
                "Smooth finish for a refined look",
            ],
            createdAT:"2025-12 25T07:12:08.017Z",
            updatedAT:"2025-12 25T07:2:08.143Z",
            inStock:true,
        },
    ]


