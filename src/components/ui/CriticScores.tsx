import { Badge } from "@chakra-ui/react/badge";

interface Props {
  score: number;
}

const CriticScores = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} paddingY={1}>
      {score}
    </Badge>
  );
};

export default CriticScores;
