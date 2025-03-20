import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bundle, Game } from "../types";
import { addBundle } from "../api/bundlesApi";

export const useAddBundle = () => {
  const queryClient = useQueryClient();

  return useMutation<Game, unknown, { gameId: string; data: Bundle }>({
    mutationKey: ["useAddBundle"],
    mutationFn: addBundle,
    onSuccess: () => {
      console.log("Mutation succeeded, invalidating games query...");
      queryClient.invalidateQueries({ queryKey: ["useFetchGames"] }); // Refresh games after the mutation
    },
  });
};
