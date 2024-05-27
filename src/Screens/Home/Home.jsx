import { Typography, Button, Box, Grid, Paper } from "@mui/material";
import background from "../../assets/Recursos/Banner Home.png";
import studio from "../../assets/Recursos/professional-photographer-beautiful-model-fashion-shoot-photo-studio-with-lighting.jpg";
import pasarela from "../../assets/Recursos/fashion-show-catwalk-event-runway-show-fashion-week-themed-photograph.jpg";
import recurso1 from "../../assets/Recursos/Recurso 70-8.png";
import recurso2 from "../../assets/Recursos/Recurso 71-8.png";
import recurso3 from "../../assets/Recursos/Recurso 72-8.png";
import recurso4 from "../../assets/Recursos/Recurso 73-8.png";
import recurso5 from "../../assets/Recursos/Recurso 74-8.png";
import recurso6 from "../../assets/Recursos/Recurso 75-8.png";
import testimonio1 from "../../assets/Recursos/testimonio1.png";
import testimonio2 from "../../assets/Recursos/testimonio2.png";
import testimonio3 from "../../assets/Recursos/testimonio3.png";
import "./Home.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const testimonioData = [
  {
    img: testimonio1,
    name: "Sofia Duarte",
    testimonial:
      "El equipo de Turina es fantástico. Me siento muy apoyada en mi carrera.",
  },
  {
    img: testimonio2,
    name: "Laura Garcia",
    testimonial:
      "Turina ha sido un muy buen apoyo en mi carrera. He tenido oportunidades interesantes gracias a ellos.",
  },
  {
    img: testimonio3,
    name: "Jennifer Lopez",
    testimonial:
      "Ha sido un muy buen impulso en mi carrera de modelaje. Me ha encantado mi experiencia en Turina.",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "left",
          pt: 8,
          pb: 8,
          width: "100%",
          height: "100vh", // Adjust the height as needed
          backgroundColor: "var(--bg-color)",
          color: "white",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center vertically
          alignItems: "flex-start", // Align to the left
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            ml: { xs: "1em", md: "3em" },
            textAlign: "left",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
            IMPULSA TU CARRERA EN EL MODELAJE CON TURINA
          </Typography>
          <Typography variant="subtitle" paragraph>
            Combinamos tecnología innovadora y formación integral para llevar tu
            talento al siguiente nivel. Descubre oportunidades exclusivas y haz
            realidad tus sueños en la moda.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            ¡ÚNETE AHORA!
          </Button>
        </Box>
      </Box>

      {/* First Section */}
      <Box sx={{ pt: 8, pb: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Bienvenidos a Turina Agency
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Descubre la Nueva Era del Modelaje
              </Typography>
              <Typography>
                Somos una vanguardista agencia de modelaje que no solo
                representa talentos, sino que también los cultiva y proyecta en
                el espectro global de la moda y el entretenimiento. Creemos en
                el poder de la belleza en todas sus formas y en la tecnología
                como su mayor aliado.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                ¡ÚNETE AHORA!
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <img
                src={studio}
                alt="New Era"
                style={{ width: "100%", height: "auto" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <img
                src={pasarela}
                alt="pasarela"
                style={{ width: "100%", height: "auto" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                ¿Quiénes Somos?
              </Typography>
              <Typography>
                Turina SA es una agencia de modelaje que redefine los estándares
                de la industria, ofreciendo una plataforma sin precedentes para
                aspirantes y modelos profesionales. Nos enfocamos en la
                formación integral y la representación global, asegurando que
                nuestros talentos brillen en las pasarelas más importantes del
                mundo.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: 8, pb: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Nuestros Servicios
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { img: recurso1, title: "Representación Global" },
            { img: recurso2, title: "Academia de Modelaje" },
            { img: recurso3, title: "Convenios Exclusivos" },
            { img: recurso4, title: "Fotografía y Creación de Contenido" },
            { img: recurso5, title: "Bienestar y Desarrollo Personal" },
            { img: recurso6, title: "Plataforma Digital" },
          ].map((service, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  style={{ width: "auto", height: "80px", maxWidth: "100%" }}
                  loading="lazy"
                />
                <Typography variant="h6" gutterBottom align="center">
                  {service.title}
                </Typography>
              </div>
            </Grid>
          ))}
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            ¡ÚNETE AHORA!
          </Button>
        </Grid>
      </Box>

      <Box sx={{ pt: 8, pb: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {testimonioData.map((equipo, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Box sx={{ p: 4, textAlign: "center" }}>
                <img
                  src={equipo.img}
                  alt={`Equipo ${index + 1}`}
                  style={{ width: "50%", height: "auto" }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {equipo.name}
                </Typography>
                <Typography>{equipo.testimonial}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ pt: 8, pb: 8, backgroundColor: "#4A3673" }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          ¿Tienes Preguntas o Quieres Saber Más Sobre Nuestros Servicios?
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Estamos aquí para ayudarte. Llena el formulario de contacto a
          continuación o utiliza nuestros datos de contacto.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          ¡CONTÁCTANOS!
        </Button>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
