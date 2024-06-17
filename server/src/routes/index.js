const express = require('express');
const router = express.Router();

// Setting layout and handling routes
const routes = [
    // { path: '/home', handler: require('./home') },
    { path: '/blog',  handler: require('./blog') },
    { path: '/contact',  handler: require('./contact') },
    { path: '/login',  handler: require('./login') },
    { path: '/auth',  handler: require('./auth') },
];

routes.forEach(route => {
    router.use(route.path,route.handler);
});


// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('server error!');
});

module.exports = router;