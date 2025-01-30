import mongoose from 'mongoose';

//----------------------first create a schema ------------------------------------
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, 
{
  timestamps: true //createAt, updateAt
});

//------------------------create product model------------------------------------
//code tells mongoDB to create a collection call 'Product' & use 'productSchema'
const Product = mongoose.model('Product', productSchema);
//while 'Product' uppercase P? //mongo will convert it to 'products' it just want you to put the uppercase 'P' and singular. It will handle the rest
export default Product;

