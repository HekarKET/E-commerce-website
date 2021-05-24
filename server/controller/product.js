import Mongoose from 'mongoose';
import Product from '../model/product.js'

export const getProduct = async (req,res)=>{
    try {
        const data = await Product.find()
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(data);
    }
}