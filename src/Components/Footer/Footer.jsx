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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        borderTop: "1px solid var(--bg-color)",
        marginBottom: "100px",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
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
            <TwitterIcon />
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
            <FacebookIcon />
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
            <InstagramIcon />
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
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Box sx={{ width: "50%", textAlign: "right" }}>
            <img src={logo} alt="logo" style={{ width: "70px" }} />
          </Box>

          <Box sx={{ width: "50%", textAlign: "left" }}>
            <Typography variant="body2">
              &copy; {year} Turina. Todos los derechos reservados.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
