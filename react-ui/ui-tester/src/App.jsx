import "./App.css";
import React from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
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
      <main style={{ marginTop: "15vh" }}>
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
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              culpa est aut soluta veritatis tempore libero quaerat ratione
              magnam. Nam!
            </Typography>

            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained">PHOTOS</Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined">ACTIONS</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container sx={{ marginTop: "5vh" }}>
          <Grid container spacing={3} justifyContent="center" direction="row">
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="Wedding Photos"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="190"
                  image="https://source.unsplash.com/random/wedding"
                  alt="Wedding Photo"
                />
                <CardContent>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi veritatis impedit corrupti rem quae qui, laboriosam
                    hic iusto reprehenderit maxime.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="Wedding Photos"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="190"
                  image="https://source.unsplash.com/random/wedding"
                  alt="Wedding Photo"
                />
                <CardContent>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi veritatis impedit corrupti rem quae qui, laboriosam
                    hic iusto reprehenderit maxime.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="Wedding Photos"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="190"
                  image="https://source.unsplash.com/random/wedding"
                  alt="Wedding Photo"
                />
                <CardContent>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi veritatis impedit corrupti rem quae qui, laboriosam
                    hic iusto reprehenderit maxime.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="Wedding Photos"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="190"
                  image="https://source.unsplash.com/random/wedding"
                  alt="Wedding Photo"
                />
                <CardContent>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi veritatis impedit corrupti rem quae qui, laboriosam
                    hic iusto reprehenderit maxime.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
