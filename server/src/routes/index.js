const express = require('express');
const router = express.Router();

const routes = [
    { path: '/profile', handler: require('./profile') },
    { path: '/blog',  handler: require('./blog') },
    { path: '/contact',  handler: require('./contact') },
    { path: '/login',  handler: require('./login') },
    { path: '/auth',  handler: require('./auth') },
];

routes.forEach(route => {
    router.use(route.path,route.handler);
});


router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('server error!');
});

module.exports = router;