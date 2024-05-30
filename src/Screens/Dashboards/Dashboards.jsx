import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import dashboard1 from "../../assets/Recursos/Servicio1.png";
import dashboard2 from "../../assets/Recursos/Servicio2.png";
import dashboard3 from "../../assets/Recursos/Servicio3.png";
import Navbar from "../../Components/Navbar/Navbar";

const dashboards = [
  {
    id: 1,
    image: dashboard1,
    title: "Minimal - Gratis",
    description: "Admin & Dashboard",
    price: "$69",
  },
  {
    id: 2,
    image: dashboard2,
    title: "Model Kit Pro - Modelos",
    description: "Admin & Dashboard",
    price: "$69",
  },
  {
    id: 3,
    image: dashboard3,
    title: "Inversionist kit Pro - Inversionistas",
    description: "Admin & Dashboard",
    price: "$69",
  },
];

function Dashboards() {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          bgcolor: "var(--bg-color)",
          color: "var(--text-color)",
          padding: "2rem",
          minHeight: "100vh",
          marginBottom: "100px",
          marginTop: "110px",
        }}
      >
        <Typography
          variant="h4"
          paragraph
          sx={{ fontWeight: "bold" }}
          align="center"
          gutterBottom
        >
          Accede a Dashboards donde puedes tener el acceso total
        </Typography>
        <Typography
          variant="h6"
          paragraph
          align="center"
          sx={{ color: "var(--subtitle-color)" }}
        >
          Una coleccion de las mejores herramnientas para administrar tus datos
          de manera profesional desarrollada por Zovthro.
        </Typography>
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "var(--link-color)",
              "&:hover": {
                bgcolor: "var(--link-hover-color)",
                borderColor: "var(--button-hover-border-color)",
              },
            }}
          >
                Adquierelos ya
          </Button>
        </Box>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Nuestros Dashboards
        </Typography>
        <Grid container spacing={4}>
          {dashboards.map((dashboard) => (
            <DashboardCard key={dashboard.id} dashboard={dashboard} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

function DashboardCard({ dashboard }) {
  const [hovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered
      ? "0px 15px 30px rgba(0, 0, 0, 0.2)"
      : "0px 5px 15px rgba(0, 0, 0, 0.1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <Grid item xs={12} sm={6} md={4}>
      <animated.div
        style={springProps}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "var(--button-bg-color)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ padding: "1rem", objectFit: "contain", maxHeight: 200 }}
            image={dashboard.image}
            alt={dashboard.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              paragraph
              sx={{ fontWeight: "bold" }}
              component="h2"
            >
              {dashboard.title}
            </Typography>
            <Typography paragraph sx={{ color: "var(--subtitle-color)" }}>
              {dashboard.description}
            </Typography>
            <Typography paragraph sx={{ fontWeight: "bold" }}>
              {dashboard.price}
            </Typography>
          </CardContent>
          <Box sx={{ textAlign: "center", marginBottom: "1rem" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "var(--link-color)",
                "&:hover": {
                  bgcolor: "var(--link-hover-color)",
                  borderColor: "var(--button-hover-border-color)",
                },
              }}
            >
              Live Preview
            </Button>
          </Box>
        </Card>
      </animated.div>
    </Grid>
  );
}

export default Dashboards;
