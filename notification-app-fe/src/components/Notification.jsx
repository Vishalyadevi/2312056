import {
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Box
} from "@mui/material";

function Notification({ item }) {

  const getColor = () => {
    switch (item.Type) {
      case "Placement":
        return "success";
      case "Result":
        return "warning";
      case "Event":
        return "primary";
      default:
        return "default";
    }
  };

  return (
    <Card
      elevation={4}
      sx={{
        width: "80%",
        margin: "20px auto",
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)"
        }
      }}
    >

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box display="flex" alignItems="center">

            <Avatar sx={{ mr: 2 }}>
              {item.Type[0]}
            </Avatar>

            <Typography variant="h6">
              {item.Type}
            </Typography>

          </Box>

          <Chip
            label={item.Type}
            color={getColor()}
          />

        </Box>

        <Typography
          sx={{ mt: 2 }}
          color="text.secondary"
        >
          {item.Message}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 2
          }}
        >
          {new Date(item.Timestamp).toLocaleString()}
        </Typography>

      </CardContent>

    </Card>
  );
}

export default Notification;