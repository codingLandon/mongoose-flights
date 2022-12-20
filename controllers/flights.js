module.exports = {
    new: newFlight,
    create
};

const Flight = require('../models/flight');

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.airline = req.body.airline.trim();
    res.redirect('/flights/new');
}