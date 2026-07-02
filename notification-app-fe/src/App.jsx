import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

import Notifications from "./pages/Notifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {

  return (

    <BrowserRouter>

      <AppBar position="static">

        <Toolbar>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Notification Dashboard
          </Typography>

          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            All
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/priority"
          >
            Priority
          </Button>

        </Toolbar>

      </AppBar>

      <Box sx={{ mt: 3 }}>

        <Routes>

          <Route
            path="/"
            element={<Notifications />}
          />

          <Route
            path="/priority"
            element={<PriorityNotifications />}
          />

        </Routes>

      </Box>

    </BrowserRouter>

  );

}

export default App;