import { Input } from "@chakra-ui/react";
import { InputGroup } from "./input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width="100%" startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          ref={ref}
          variant="outline"
          size="lg"
          _hover={{ borderColor: "purple.500" }}
          _focus={{ borderColor: "purple.500" }}
          placeholder="Search Game..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
