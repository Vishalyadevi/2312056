const express = require("express");
const router = express.Router();

const {
    getTopNotifications
} = require("../services/notificationService");

router.get("/top-notifications", getTopNotifications);

module.exports = router;