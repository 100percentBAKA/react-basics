import "./App.css";
import React from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

function App() {
  return (
    <React.Fragment>
      {/* By placing the CssBaseline here, a lot of default styling is pre applied to Material UI component */}
      <CssBaseline />

      {/* Material UI Appbar */}
      <AppBar>
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <main style={{ marginTop: "7vh" }}>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              gutterBottom
              align="center"
              color="textPrimary"
            >
              Photo Album
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              align="center"
              color="textSecondary"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              culpa est aut soluta veritatis tempore libero quaerat ratione
              magnam. Nam!
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
