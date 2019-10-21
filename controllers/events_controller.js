import * as Events from '../models/event'

export const makeNewEvent = function (req, res) {
    Events.makeNewEvent(req).save((err, post) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
        res.status(201);
        res.send(post);
    });
};

export const getAllEvents = function (req, res) {
    Events.getAllEvents(req).exec((err, events) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
        res.send(events);
    });
};

