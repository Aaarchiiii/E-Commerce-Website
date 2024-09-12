const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: "Iphone 14 pro",
        img: "https://images.unsplash.com/photo-1681395791877-e7186492ad3a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 130000,
        desc: "very costly"
    },
    {
        name: "Macbook m2 pro",
        img: "https://images.unsplash.com/photo-1675868375184-8d711f447b28?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 250000,
        desc: "Good look"
    },
    {
        name: "Iwatch",
        img: "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 51000,
        desc: "Less expensive"
    },
    {
        name: "iPad Pro",
        img: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBhZCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price: 237900,
        desc: "Very Costly"
    },
    {
        name: "Airpods",
        img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        desc: "Good"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;