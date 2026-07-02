import { useEffect, useState } from "react";
import axios from "axios";

import Notification from "../components/Notification";
import { Log, TOKEN } from "../logger/log";
import { Typography } from "@mui/material";
<Typography
    variant="h4"
    align="center"
    sx={{
        mt:3,
        fontWeight:"bold"
    }}
>
    All Notifications
</Typography>

function Notifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    fetchNotifications();

  }, []);

  async function fetchNotifications() {

    try {

      await Log(
        "frontend",
        "info",
        "page",
        "Loading Notifications"
      );

      const res = await axios.get(
        "http://4.224.186.213/evaluation-service/notifications?limit=10&page=1",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );

      setNotifications(res.data.notifications);

      await Log(
        "frontend",
        "info",
        "page",
        "Notifications Loaded"
      );

    } catch (err) {

      await Log(
        "frontend",
        "error",
        "page",
        "Notification Fetch Failed"
      );

      console.log(err.response?.data || err.message);

    }

  }

  return (

    <>
      {
        notifications.map((item) => (

          <Notification
            key={item.ID}
            item={item}
          />

        ))
      }
    </>

  );

}

export default Notifications;