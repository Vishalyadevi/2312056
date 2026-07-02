const axios = require("axios");
const Log = require("../../logging-middleware/logger/log");
const API = "http://4.224.186.213/evaluation-service/notifications";
const priority = {
    Placement: 3,
    Result: 2,
    Event: 1
};
async function getTopNotifications(req, res) {
    try {
        await Log(
            "backend",
            "info",
            "service",
            "Fetching notifications from API"
        );
        const response = await axios.get(API);
        const notifications = response.data.notifications;
        const topNotifications = notifications
            .sort((a, b) => {
                const p1 = priority[a.Type];
                const p2 = priority[b.Type];
                if (p1 !== p2) {
                    return p2 - p1;
                }
                return new Date(b.Timestamp) - new Date(a.Timestamp);
            })
            .slice(0, 10);
        await Log(
            "backend",
            "info",
            "service",
            "Top 10 notifications returned"
        );
        res.status(200).json(topNotifications);
    } catch (err) {
        await Log(
            "backend",
            "error",
            "service",
            "Failed to fetch notifications"
        );
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
module.exports = {
    getTopNotifications
};