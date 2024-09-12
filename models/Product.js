const mongoose = require('mongoose');
const Review = require('./Review');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type: Number,
        required: true,
        min:0
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,  //to get object id
            ref:'Review'
        }
    ],
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

// middleware jo behind the scene mongodb operations krwane pr use hota he and iske andar pre and post middleware hote he which are basically used over the schema and before the model in js class
productSchema.post('findOneAndDelete' , async function(product){
    if(product.reviews.length > 0){
        await Review.deleteMany({_id:{$in:product.reviews}})
    }
})

let Product = mongoose.model('Product', productSchema);
module.exports = Product;