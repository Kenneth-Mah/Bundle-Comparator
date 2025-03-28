import { useMutation, useQuery } from "@tanstack/react-query";
import { addBundle, getBundlesByGameId } from "../api/bundlesApi";

export const useAddBundle = () => {
  return useMutation({
    mutationKey: ["useAddBundle"],
    mutationFn: addBundle,
  });
};

export const useGetBundlesByGameId = (gameId: string) => {
  return useQuery({
    queryKey: ["useGetBundlesByGameId", gameId],
    queryFn: () => getBundlesByGameId(gameId),
    enabled: !!gameId,
  });
};
