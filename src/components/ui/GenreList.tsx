import useGeneresList from "@/hooks/useGenresList";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, HStack, Spinner, Link, Heading } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenresList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGeneresList();

  if (error) return null;
  if (isLoading) return <Spinner size="lg" />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Link
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
