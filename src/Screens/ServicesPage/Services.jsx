import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import servicio1 from "../../assets/Recursos/Servicio1.png";
import servicio2 from "../../assets/Recursos/Servicio2.png";
import servicio3 from "../../assets/Recursos/Servicio3.png";
import servicio4 from "../../assets/Recursos/Servicio4.png";
import servicio5 from "../../assets/Recursos/Servicio5.png";
import servicio6 from "../../assets/Recursos/Servicio6.png";
import Navbar from "../../Components/Navbar/Navbar";

const services = [
  {
    id: 1,
    image: servicio1,
    title: "Servicio 1",
    description: "Descripción del servicio 1",
  },
  {
    id: 2,
    image: servicio2,
    title: "Servicio 2",
    description: "Descripción del servicio 2",
  },
  {
    id: 3,
    image: servicio3,
    title: "Servicio 3",
    description: "Descripción del servicio 3",
  },
  {
    id: 4,
    image: servicio4,
    title: "Servicio 4",
    description: "Descripción del servicio 4",
  },
  {
    id: 5,
    image: servicio5,
    title: "Servicio 5",
    description: "Descripción del servicio 5",
  },
  {
    id: 6,
    image: servicio6,
    title: "Servicio 6",
    description: "Descripción del servicio 6",
  },
];

function Services() {
  return (
    <>
      <Navbar />
      <Box
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
          Nuestros Servicios
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

function ServiceCard({ service }) {
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
            image={service.image}
            alt={service.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              paragraph
              sx={{ fontWeight: "bold" }}
              component="h2"
            >
              {service.title}
            </Typography>
            <Typography paragraph sx={{ fontWeight: "bold" }}>
              {service.description}
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
              Más información
            </Button>
          </Box>
        </Card>
      </animated.div>
    </Grid>
  );
}

export default Services;
