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

export const removeEvent = function (req, res) {
    if (req.error) {
        res.status(req.error.status);
        res.send(req.error.message);
    } else {
        Events.removeEvent(req.params.id).exec((err) => {
            if (err) {
                res.status(500);
                res.json({
                    error: err.message
                });
            }
            res.sendStatus(204);
        });
    }
};

export const changeEvent = function (req, res) {
    if (req.error) {
        res.status(req.error.status);
        res.send(req.error.message);
    } else {
        Events.changeEvent(req).exec((err, post) => {
            if (err) {
                res.status(500);
                res.json({
                    error: err.message
                });
            }
            res.status(200);
            res.send(post);
        });
    }
};

