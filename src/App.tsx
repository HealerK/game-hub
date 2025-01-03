import { useBreakpointValue } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/ui/Navbar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {showAside && (
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      )}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
