import useGeneresList from "@/hooks/useGenresList";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, HStack, Spinner, Link } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenresList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGeneresList();

  if (error) return null;
  if (isLoading) return <Spinner size="lg" />;

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
            <Link onClick={() => onSelectGenre(genre)} fontSize="lg">
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
