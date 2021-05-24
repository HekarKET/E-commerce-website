
import Mongoose from 'mongoose'

const ProductSchema = Mongoose.Schema({
    Image: String,
    Title:String,
    Quantity:Number,
    Owner: String,
    Price:Number,
    Tags:[String],
    Stars:{
        type:Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Product = Mongoose.model('Products',ProductSchema)
export default Product;