
const express = require('express')
const dotenv = require('dotenv');
const { connectDb } = require('./config/db');
const { default: Product } = require('./models/product.model');

dotenv.config()

const app = express()

app.post('/products', async(req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        res.status(400).json({success: false, message: 'Please provide all fields'})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({success: true, data: newProduct})

    } catch (error) {
        console.log('Failed to create product' + error.message);
        res.status(500).json({success: false, 'server error'})
    }
})

app.listen(3000, () => {
    connectDb()
    console.log('server is up and running on port 3000')})