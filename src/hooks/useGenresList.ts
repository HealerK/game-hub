import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGeneresList = () => ({ data: genres, isLoading: false, error: null });

export default useGeneresList;
