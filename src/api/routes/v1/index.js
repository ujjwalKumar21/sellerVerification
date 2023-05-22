const express = require('express');
const userRoutes = require('./user.route');
const handleS3 = require('./s3Handle.route');
const handleCrms = require('./bsCrm.route');
const sellerVerificationRoute = require('./seller_verification');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));


router.use('/users', userRoutes);

router.use('/s3', handleS3);

router.use('/crm', handleCrms);

router.use('/verifySeller', sellerVerificationRoute);


module.exports = router;
