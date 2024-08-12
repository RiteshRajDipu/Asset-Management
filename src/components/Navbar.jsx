import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography varient='h5' component="div" sx={{ flexGrow: 1 }}>
            Asset Inventory
          </Typography>
          <Button component={NavLink} to="/" sx={{ color: "white", textTransform: 'none' }}
            style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }}>Home</Button>
          <Button component={NavLink} to="/contact" sx={{ color: "white", textTransform: 'none' }}
            style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }}
          >Contact</Button>
          <Button component={NavLink} to="/login" sx={{ color: "white", textTransform: 'none' }}
            style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }}
          >Login/Registration</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>;
}

export default Navbar