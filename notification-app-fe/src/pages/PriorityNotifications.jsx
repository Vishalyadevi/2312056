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
function PriorityNotifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    loadPriorityNotifications();

  }, []);

  async function loadPriorityNotifications() {

    try {

      await Log(
        "frontend",
        "info",
        "page",
        "Loading Priority Notifications"
      );

      const res = await axios.get(
        "http://4.224.186.213/evaluation-service/notifications?limit=10&page=1",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );

      const priority = {
        Placement: 3,
        Result: 2,
        Event: 1
      };

      const topNotifications = res.data.notifications

        .sort((a, b) => {

          const p1 = priority[a.Type];
          const p2 = priority[b.Type];

          if (p1 !== p2)
            return p2 - p1;

          return (
            new Date(b.Timestamp) -
            new Date(a.Timestamp)
          );

        })

        .slice(0, 10);

      setNotifications(topNotifications);

      await Log(
        "frontend",
        "info",
        "page",
        "Priority Notifications Loaded"
      );

    } catch (err) {

      await Log(
        "frontend",
        "error",
        "page",
        "Priority Notification Fetch Failed"
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

export default PriorityNotifications;