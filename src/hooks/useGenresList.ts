import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGeneresList = () => useData<Genre>("/genres");

export default useGeneresList;
