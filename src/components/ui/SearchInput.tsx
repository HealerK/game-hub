import { Input } from "@chakra-ui/react";
import { InputGroup } from "./input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup width="70%" startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        variant="outline"
        size="lg"
        _hover={{ borderColor: "purple.500" }}
        _focus={{ borderColor: "purple.500" }}
        placeholder="Search Game..."
      />
    </InputGroup>
  );
};

export default SearchInput;
