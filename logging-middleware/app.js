const Log = require("./logger/log");

async function run() {

    await Log(
        "backend",
        "info",
        "service",
        "Application started"
    );

    await Log(
        "backend",
        "debug",
        "controller",
        "Fetching user details"
    );

    await Log(
        "backend",
        "warn",
        "db",
        "Database response is slow"
    );

    await Log(
        "backend",
        "error",
        "handler",
        "Received string, expected boolean"
    );

    await Log(
        "backend",
        "fatal",
        "db",
        "Critical database connection failure"
    );

}

run();