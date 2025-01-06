import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <Flex padding="10px" justifyContent="space-between">
      <Image src={logo} height="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};

export default Navbar;
