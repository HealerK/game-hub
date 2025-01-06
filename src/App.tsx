import { HStack, useBreakpointValue } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/ui/Navbar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenresList";
import PlatformSelector from "./components/ui/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/ui/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {showAside && (
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      )}
      <GridItem area="main">
        <HStack paddingX={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectedOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
