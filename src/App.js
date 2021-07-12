import "./App.css";
import Header from "./components/Header";
import TableCategorie from "./components/TableCategorie";
import { Container, Typography } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <Typography variant="h1">
          Chuck Norris Jokes
        </Typography>
        <TableCategorie />
      </Container>
    </div>
  );
}

export default App;
