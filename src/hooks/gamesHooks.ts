import { useMutation, useQuery } from "@tanstack/react-query";
import { addGame, fetchGames } from "../api/gamesApi";

export const useAddGame = () => {
  return useMutation({
    mutationKey: ["useAddGame"],
    mutationFn: addGame,
  });
};

export const useFetchGames = () => {
  return useQuery({
    queryKey: ["useFetchGames"],
    queryFn: fetchGames,
  });
};
