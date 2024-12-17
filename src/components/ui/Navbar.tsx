import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/video.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
