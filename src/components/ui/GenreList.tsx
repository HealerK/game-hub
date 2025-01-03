import useGeneresList from "@/hooks/useGenresList";

const GenreList = () => {
  const { data } = useGeneresList();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
