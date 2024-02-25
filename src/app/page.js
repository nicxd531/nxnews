import { Container, Paper, Box } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
      <Box>
        <Container component="main" maxWidth="lg" sx={{ minHeight: "100vh" }}>
          <Paper>hello</Paper>
        </Container>
      </Box>
  );
}
