const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


// if we make a request to any endpoint that doesn't exist
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;