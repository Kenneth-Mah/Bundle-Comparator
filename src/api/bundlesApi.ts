import { Bundle, Game } from "../types";
import apiClient from "./apiClient";

export const addBundle = async ({
  gameId,
  data,
}: {
  gameId: string;
  data: Bundle;
}): Promise<Game> => {
  const existingGame = await apiClient.get(`/games/${gameId}`);

  const updatedBundles = [...existingGame.data.bundles, data];

  const response = await apiClient.patch(`/games/${gameId}`, {
    bundles: updatedBundles,
  });

  return response.data;
};
