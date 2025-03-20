import { useQuery } from "@tanstack/react-query";
import { Game } from "../types";
import { fetchGames } from "../api/gamesApi";

export const useFetchGames = () => {
  return useQuery<Game[]>({
    queryKey: ["useFetchGames"],
    queryFn: fetchGames,
  });
};
