const express = require('express');

function home(req, res) {
    let access_token = req.cookies.access_token;
    let isAuthenticated = false;
    
    if (access_token) {
        isAuthenticated = true;
    }
    
    res.render('home.ejs', { isAuthenticated });
}

module.exports = home;
