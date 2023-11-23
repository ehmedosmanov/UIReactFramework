import { Container, Typography, Box, Grid } from "@mui/material";

import "./App.css";

const services = [
  "service1",
  "sfefe",
  "service3w132",
  "service3w132",
  "service3w132",
  "service3w132",
  "service3w132",
];

function App() {
  return (
    <>
      <Container>
        <Typography
          variant="h1"
          sx={{ my: 4, textAlign: "center", color: "primary.main" }}
        >
          Services
        </Typography>
        <Typography variant="h2">Overview</Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box bgcolor="red" p={2}>
            This is the First Grid
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box bgcolor="green" p={2}>
            This is the Second Grid
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box bgcolor="red" p={2}>
            This is the Third Grid
          </Box>
        </Grid>
        <Grid item xs={12}  md={8}>
          <Box bgcolor="green" p={2}>
            This is the Fourth Grid
          </Box>
        </Grid>
      </Grid>
      </Container>
    </>
  );
}

export default App;
