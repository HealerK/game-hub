import { useBreakpointValue } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/ui/Navbar";

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
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      )}
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
