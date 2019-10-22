const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = mongoose.model("Events", new Schema({
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
    return Event.find();
}

export const makeNewEvent = (req) => {
    return new Event(req.body);
};

export const removeEvent = (id) => {
    return Event.findByIdAndRemove(id);
};

export const changeEvent = function (req) {
    return Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
};