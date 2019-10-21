const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = mongoose.model(new Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    description: String,
    price: {
        type: Number,
    },
    category: {
        type: String,
        required: true,
        enum:['Sport','Music','Party']
    },
    theme: {
        type: String,
        enum: ['Halloween', 'Christmas', 'Easter', 'Birthday']
    }
}));

export const getAllEvents = () => {
    Event.find()
}
