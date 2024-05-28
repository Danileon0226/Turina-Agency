import { Box, Typography, IconButton, Grid, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../assets/Recursos/Recurso 66-8.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        borderTop: "1px solid var(--bg-color)",
        marginBottom: "100px",
        textAlign: "center", // Añadido para centrar el contenido
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center" // Centramos los elementos horizontalmente
        alignItems="center"
        spacing={2} // Espacio entre los elementos del Grid
      >
        {/* Social Media Icons */}
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://twitter.com"
            target="_blank"
          >
            <TwitterIcon fontSize="large" />{" "}
            {/* Ajustamos el tamaño de los iconos */}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://facebook.com"
            target="_blank"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://www.instagram.com"
            target="_blank"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://linkedin.com"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>

        {/* Logo */}
        <Grid item xs={12} md="auto">
          <img src={logo} alt="logo" style={{ width: "70px" }} />
        </Grid>

        {/* Copyright */}
        <Grid item xs={12} md="auto">
          <Typography variant="body2">
            &copy; {year} Turina. Todos los derechos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
