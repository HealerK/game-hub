import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} objectFit="cover" />
      <Card.Header>{game.name}</Card.Header>
    </Card.Root>
  );
};

export default GameCard;
