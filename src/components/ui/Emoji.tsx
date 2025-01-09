import meh from "../../assets/meh.webp";
import bullEye from "../../assets/bulls-eye.webp";
import thumsUp from "../../assets/thumbs-up.webp";
import { Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

interface ImageProps {
  src: string;
  alt: string;
  boxSize: string;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "expectional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
