const express = require('express');
const controller = require('../../controllers/seller_verification');


const router = express.Router();

router.get("/getData", controller.getData);
router.get("/getSellerName", controller.getSellerName);
router.get("/viewAttachments/:id", controller.getFileData);
router.put("/isVerify", controller.updateData);
router.delete("/deleteData", controller.deleteData);

module.exports = router;
