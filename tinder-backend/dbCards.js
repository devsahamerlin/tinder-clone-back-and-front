const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
});

/*export class Cards {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    userId: string;
  }*/

export default mongoose.model('Cards', cardSchema);