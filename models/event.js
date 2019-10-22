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
// Creates new event
export const makeNewEvent = (req) => {
    return new Event(req.body);
};
// Gets a list of all events
export const getAllEvents = () => {
    return Event.find();
}
// Gets an event by Category
export const getEventsByCategory = (req) => {
    return Event.find({category: req.params.category})
}

export const removeEvent = (id) => {
    return Event.findByIdAndRemove(id);
};

export const changeEvent = function (req) {
    return Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
};