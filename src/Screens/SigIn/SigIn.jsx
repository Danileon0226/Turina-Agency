import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
  Box,
} from "@mui/material";
import "./SigIn.css"; // Asegúrate de incluir los estilos necesarios
import logo from "../../assets/Recursos/Recurso 58-100.jpg"; // Ajusta la ruta según tu archivo
import banner from "../../assets/Recursos/Banner Home.png"; // Ajusta la ruta según tu archivo

function SignIn() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "50%",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 4,
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                className="login-header"
                paragraph
              >
                Sign Up
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  color="secondary"
                  autoComplete="given-name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  color="secondary"
                  autoComplete="family-name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  color="secondary"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  color="secondary"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
                <Button
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Link href="#" variant="body2" color="secondary">
                  {"Already have an account? Sign in"}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
