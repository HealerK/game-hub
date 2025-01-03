import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGeneresList = () => useData<Genre>("/genres");

export default useGeneresList;
