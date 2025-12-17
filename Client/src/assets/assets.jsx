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
import o1 from './Do1.jpg';
import o2 from './Do2.webp';
import o3 from './Do4.jpg';
import o4 from './Do5.jpg';
import o5 from './Do6.jpg';
import b1 from './be1.webp';
import b2 from './be2.jpg';
import b3 from './be3.webp';
import b4 from './be4.webp';
import b5 from './be5.jpg';
import t1 from './ta1.jpg';
import t2 from './ta2.webp';
import t3 from './ta3.jpg';
import t4 from './ta4.webp';
import t5 from './ta5.jpg';
import s1 from './sw1.webp';
import s2 from './sw2.webp';
import s3 from './sw3.jpg';
import s4 from './sw4.webp';
import v1 from './va1.jpg';
import v2 from './v2.jpg';
import v3 from './va3.jpg';
import d11 from './D11.jpg';
import d12 from './D12.jpg';
import d13 from './D13.jpg';
import r from './refresh.png';

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
    logo,
    o1,
    o2,
    o3,
    o4,
    o5,b1,
    b2,
    b3,
    b4,
    b5,
    t1,
    t2,
    t3,
    t4,
    t5,
    s1,
    s2,
    s3,
    s4,
    v1,
    v2,
    v3,r

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
        path:"table",
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
        text:"Wall",
        path:"wall",
        image:wall,
        bgColor:"#EEF5FF",
    },
      {
        text:"Vase",
        path:"vase",
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
    _id: "gd46g23h-1",
    name: "Dining Table 4 Seater",
    category: "Dine",
    price: 20000,
    offerPrice: 15000,
    image: [d1,d11,d12,d13],
    description: [
      "Crafted from premium quality wood",
      "Elegant design for modern dining spaces",
      "Smooth finish for a refined look",
    ],
    inStock: true,
  },
  {
    _id: "gd48g23h-1",
    name: "Wooden Table",
    category: "table",
    price: 2500,
    offerPrice: 2000,
    image: [table],
    inStock: true,
  },
   {
    _id: "gd60g23h-2",
    name: "Bed",
    category: "Bed",
    price: 10000,
    offerPrice: 5000,
    image: [b3],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },

    {
    _id: "gd56g23h-2",
    name: "Door",
    category: "Door",
    price: 10000,
    offerPrice: 5000,
    image: [o1],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd70g23h-2",
    name: "Swing",
    category: "swing",
    price: 10000,
    offerPrice: 5000,
    image: [s1],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  {
    _id: "gd47g23h-2",
    name: "Dining Table 6 Seater",
    category: "Dine",
    price: 30000,
    offerPrice: 25000,
    image: [d2],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
    {
    _id: "gd45g23h-2",
    name: "Dining Table 4 Seater",
    category: "Dine",
    price: 30000,
    offerPrice: 25000,
    image: [d5],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  
    {
   _id: "gd44g23h-2",
    name: "Dining Table 4 Seater",
    category: "Dine",
    price: 30000,
    offerPrice: 25000,
    image: [d3],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  
    {
    _id: "gd43g23h-2",
    name: "Dining Table 4 Seater",
    category: "Dine",
    price: 30000,
    offerPrice: 25000,
    image: [d4],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd42g23h-2",
    name: "Dining Table 4 Seater",
    category: "Dine",
    price: 30000,
    offerPrice: 25000,
    image: [d6],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  
   {
    _id: "gd41g23h-2",
    name: "Dining Table 4 Seater",
    category: "Dine",
    price: 30000,
    offerPrice: 25000,
    image: [d7],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
 
   {
    _id: "gd54g23h-2",
    name: "Door",
    category: "Door",
    price: 10000,
    offerPrice: 5000,
    image: [o2],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  {
    _id: "gd55g23h-2",
    name: "Door",
    category: "Door",
    price: 10000,
    offerPrice: 5000,
    image: [o3],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  {
  _id: "gd57g23h-2",
    name: "Door",
    category: "Door",
    price: 10000,
    offerPrice: 5000,
    image: [o4],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  {
    _id: "gd58g23h-2",
    name: "Door",
    category: "Door",
    price: 10000,
    offerPrice: 5000,
    image: [o5],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd52g23h-2",
    name: "Bed",
    category: "Bed",
    price: 10000,
    offerPrice: 5000,
    image: [b1],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd51g23h-2",
    name: "Bed",
    category: "Bed",
    price: 10000,
    offerPrice: 5000,
    image: [b2],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
  
    {
    _id: "gd49g23h-1",
    name: "Wall",
    category: "wall",
    price: 2500,
    offerPrice: 2000,
    image: [w1],
    inStock: true,
  },
   {
    _id: "gd61g23h-2",
    name: "Bed",
    category: "Bed",
    price: 10000,
    offerPrice: 5000,
    image: [b4],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd62g23h-2",
    name: "Bed",
    category: "Bed",
    price: 10000,
    offerPrice: 5000,
    image: [b5],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
    {
    _id: "gd63g23h-2",
    name: "Table",
    category: "table",
    price: 10000,
    offerPrice: 5000,
    image: [t1],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
   _id: "gd64g23h-2",
    name: "Table",
    category: "table",
    price: 10000,
    offerPrice: 5000,
    image: [t2],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd65g23h-2",
    name: "Table",
    category: "table",
    price: 10000,
    offerPrice: 5000,
    image: [t3],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd66g23h-2",
    name: "Table",
    category: "table",
    price: 10000,
    offerPrice: 5000,
    image: [t4],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
   {
    _id: "gd69g23h-2",
    name: "Table",
    category: "table",
    price: 10000,
    offerPrice: 5000,
    image: [t5],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
 
    {
    _id: "gd71g23h-2",
    name: "Swing",
    category: "swing",
    price: 10000,
    offerPrice: 5000,
    image: [s2],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
    {
    _id: "gd72g23h-2",
    name: "Swing",
    category: "swing",
    price: 10000,
    offerPrice: 5000,
    image: [s3],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
    {
    _id: "gd73g23h-2",
    name: "Swing",
    category: "swing",
    price: 10000,
    offerPrice: 5000,
    image: [s4],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
    {
    _id: "gd74g23h-2",
    name: "Vase",
    category: "vase",
    price: 10000,
    offerPrice: 5000,
    image: [v1],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
    {
    _id: "gd75g23h-2",
    name: "Vase",
    category: "vase",
    price: 10000,
    offerPrice: 5000,
    image: [v2],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
    {
    _id: "gd76g23h-2",
    name: "Vase",
    category: "vase",
    price: 10000,
    offerPrice: 5000,
    image: [v3],
    description: [
      "Premium solid wood construction",
      "Perfect for large families",
    ],
    inStock: true,
  },
];
 export const addresses =[
  {
    street: "123 Main street",
    city:"Bangalore",
    state:"Karnataka",
    Country :"India",
    },
     {
    street: "143 Main street",
    city:"Hassan",
    state:"Karnataka",
    Country :"India",
    },
     {
    street: "13 Main street",
    city:"Bangalore",
    state:"Karnataka",
    Country :"India",
    },
     {
    street: "12 Main street",
    city:"Bangalore-rural",
    state:"Karnataka",
    Country :"India",
    },
     {
    street: "1 Main street",
    city:"Bangalore",
    state:"Karnataka",
    Country :"India",
    },
     {
    street: "143 Main street",
    city:"Vijaypura",
    state:"Karnataka",
    Country :"India",
    },
     {
    street: "121 Main street",
    city:"Shivamogga",
    state:"Karnataka",
    Country :"India",
    },
     {
    street: "1 Main street",
    city:"Davangere",
    state:"Karnataka",
    Country :"India",
    },

]



