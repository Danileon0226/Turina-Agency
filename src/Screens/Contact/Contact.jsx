import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          padding: { xs: "10px", md: "20px" },
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          marginBottom: "100px",
          marginTop: "110px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          paragraph
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Contacto
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Formulario de Contacto */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: { xs: "15px", md: "15px" } }}>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Correo Electrónico"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Asunto"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ width: "100%" }}
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Espacio para el Mapa */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ padding: { xs: "15px", md: "15px" }, height: "100%" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "300px", md: "400px" },
                  backgroundColor: "grey.300",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    lineHeight: { xs: "300px", md: "400px" },
                  }}
                >
                  Aquí irá el mapa
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
