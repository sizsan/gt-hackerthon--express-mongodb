import * as Events from '../models/event'

export const getAllEvents = function (req, res) {
    Events.getAllEvents(req).
    exec((err, products) => {
        if (err) {
            res.status(500);
            res.json({
                error: err.message
            });
        }
        res.send(products);
    });
};

