import useGeneresList from "@/hooks/useGenresList";

const GenreList = () => {
  const { genres } = useGeneresList();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
