import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import './ServiceSection.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";
import servicio1 from "../../assets/Recursos/Servicio1.png";
import servicio2 from "../../assets/Recursos/Servicio2.png";
import servicio3 from "../../assets/Recursos/Servicio3.png";
import servicio4 from "../../assets/Recursos/Servicio4.png";
import servicio5 from "../../assets/Recursos/Servicio5.png";
import servicio6 from "../../assets/Recursos/Servicio6.png";


const services = [
  {
    title: "REPRESENTACIÓN DE MODELOS",
    description1: "Representación Global: Conectamos a nuestros talentos con las marcas más prestigiosas y las pasarelas más importantes del mundo.",
    description2: "Gestión de Carrera: Ofrecemos asesoramiento personalizado en el desarrollo de tu carrera, incluyendo negociación de contratos y planificación de trayectoria profesional.",
    imgSrc: servicio1,
  },
  {
    title: "ACADEMIA DE MODEL AJE TURINA",
    description1: "Formación Integral: Contamos con cursos y talleres que cubren todos los aspectos del modelaje, desde pasarela hasta sesiones de fotos.",
    description2: "Talleres de Especialización: Te ayudamos a desarrollar habilidades específicas para destacar en el área de tu interés.",
    imgSrc: servicio2,
    reverse: true,
  },
  {
    title: "CONVENIOS EXCLUSIVOS",
    description1: "Conexiones Internacionales: Acceso a eventos y desfiles exclusivos en todo el mundo.",
    description2: "Red de Networking: Benefíciate de nuestras alianzas estratégicas con las principales agencias y marcas.",
    imgSrc: servicio3,
  },
  {
    title: "PLATAFORMA DIGITAL TURINA",
    description1: "Perfil Digital Personalizado: Crea y gestiona tu perfil profesional en nuestra plataforma exclusiva.",
    description2: "Audiciones Virtuales: Participa en castings y audiciones sin salir de casa.",
    imgSrc: servicio4,
    reverse: true,
  },
  {
    title: "FOTOGRAFÍA Y CREACIÓN DE CONTENIDO",
    description1: "Estudio Profesional: Acceso a nuestro estudio fotográfico equipado con tecnología de punta.",
    description2: "Producción de Contenido: Te ayudamos a crear material visual de alta calidad para tus redes sociales y portafolio.",
    imgSrc: servicio5,
  },
  {
    title: "BIENESTAR Y DESARROLLO PERSONAL",
    description1: "Programas de Bienestar: Sesiones de coaching, yoga y meditación para mantener un equilibrio saludable.",
    description2: "Desarrollo Personal: Talleres y cursos enfocados en el crecimiento y desarrollo integral de nuestros modelos.",
    imgSrc: servicio6,
    reverse: true,
  },
];

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

const ServiceSection = () => {
  return (
    <>
    <Navbar />
    <div className="services">
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        SERVICIOS DE TURINA AGENCY
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        En Turina S.A., ofrecemos una gama completa de servicios diseñados para desarrollar y proyectar el talento de nuestros modelos en la industria global de la moda y el entretenimiento.
      </Typography>
      {services.map((service) => (
        <div key={service.id} className={`service-section ${service.reverse ? 'reverse' : ''}`}>
          <div className="service-image-container">
            <img src={service.imgSrc} alt={service.title} className="service-image" />
          </div>
          <div className="service-text">
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              {service.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>{service.description1.split(':')[0]}:</strong> {service.description1.split(':')[1]}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>{service.description2.split(':')[0]}:</strong> {service.description2.split(':')[1]}
            </Typography>
          </div>
        </div>
      ))}
    </div>
      <CallToAction />
      <Footer />
      </>
  );
};

export default ServiceSection;
