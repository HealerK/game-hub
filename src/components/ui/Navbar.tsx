import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <Flex padding="10px" justifyContent="space-between">
      <Image src={logo} height="50px" borderRadius={10} marginTop={1} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </Flex>
  );
};

export default Navbar;
