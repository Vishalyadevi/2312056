const express = require("express");
const Log = require("../logging-middleware/logger/log"); // Change path if needed
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(express.json());

app.use("/", notificationRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
    await Log(
        "backend",
        "info",
        "service",
        `Server running on port ${PORT}`
    );
});