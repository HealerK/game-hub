import useGeneresList from "@/hooks/useGenresList";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, Text, HStack } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGeneresList();
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
