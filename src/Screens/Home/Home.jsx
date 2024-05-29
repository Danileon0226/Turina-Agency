import React from "react";
import { Typography, Button, Box, Grid, Paper } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
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

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  const slideIn = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 400,
  });

  return (
    <animated.div style={fadeIn}>
      <Box
        sx={{
          pt: { xs: 4, md: 8 },
          pb: { xs: 4, md: 8 },
          width: "100%",
          height: { xs: "auto", md: "100vh" },
          minHeight: "100vh",
          backgroundColor: "var(--bg-color)",
          color: "white",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <animated.div style={slideIn}>
          <Box
            sx={{
              maxWidth: { xs: "90%", sm: "80%", md: "600px" },
              ml: { xs: 0, md: "3em" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
              paragraph
              gutterBottom
            >
              IMPULSA TU CARRERA EN EL MODELAJE CON TURINA
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Combinamos tecnología innovadora y formación integral para llevar
              tu talento al siguiente nivel. Descubre oportunidades exclusivas y
              haz realidad tus sueños en la moda.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              ¡ÚNETE AHORA!
            </Button>
          </Box>
        </animated.div>
      </Box>
    </animated.div>
  );
};

const FirstSection = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  return (
    <animated.div style={fadeIn}>
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
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Descubre la Nueva Era del Modelaje
              </Typography>
              <Typography variant="subtitle" paragraph>
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
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                ¿Quiénes Somos?
              </Typography>
              <Typography variant="subtitle" paragraph>
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
    </animated.div>
  );
};

const ServicesSection = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  return (
    <animated.div style={fadeIn}>
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
                <Typography variant="h6" gutterBottom align="center" paragraph>
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
    </animated.div>
  );
};

const TestimonialsSection = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  return (
    <animated.div style={fadeIn}>
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
                  paragraph
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {equipo.name}
                </Typography>
                <Typography variant="subtitle" paragraph>
                  {equipo.testimonial}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </animated.div>
  );
};

const CallToAction = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  return (
    <animated.div style={fadeIn}>
      <Box
        sx={{
          pt: { xs: 4, sm: 6, md: 8 },
          pb: { xs: 4, sm: 6, md: 8 },
          backgroundColor: "#4A3673",
          height: { xs: "auto", md: "200px" },
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          paragraph
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
          }}
        >
          ¿Tienes Preguntas o Quieres Saber Más Sobre Nuestros Servicios?
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          sx={{
            color: "white",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
          }}
        >
          Estamos aquí para ayudarte. Llena el formulario de contacto a
          continuación o utiliza nuestros datos de contacto.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2 }}
        >
          ¡CONTÁCTANOS!
        </Button>
      </Box>
    </animated.div>
  );
};

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
