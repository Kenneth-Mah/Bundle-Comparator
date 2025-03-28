import { CreateGameRequest, Game } from "../types";
import apiClient from "./apiClient";

export const addGame = async (game: CreateGameRequest): Promise<Game> => {
  const response = await apiClient.post("/games", game);
  return response.data;
};

export const fetchGames = async (): Promise<Game[]> => {
  const response = await apiClient.get("/games");
  return response.data;
};
