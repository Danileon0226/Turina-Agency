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
import "./Login.css";
import logo from "../../assets/Recursos/Recurso 58-100.jpg";
import banner from "../../assets/Recursos/Banner Home.png";

function Login() {
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
                Inicio de Sesíon
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  color="secondary"
                  autoComplete="email"
                  autoFocus
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
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Iniciar Sesíon
                </Button>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link color="secondary" href="#" variant="body2">
                    Forgot password?
                  </Link>
                  <Link href="#" variant="body2" color="secondary">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
