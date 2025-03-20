import { Game } from "../types";
import apiClient from "./apiClient";

export const fetchGames = async (): Promise<Game[]> => {
  const response = await apiClient.get("/games");
  return response.data;
};
