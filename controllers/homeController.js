const express = require('express');

function home(req, res) {
    res.redirect("/book");
}

module.exports = home;
