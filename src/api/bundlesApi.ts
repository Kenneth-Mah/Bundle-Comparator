import { Bundle, CreateBundleRequest, Game } from "../types";
import apiClient from "./apiClient";

export const addBundle = async (bundle: CreateBundleRequest): Promise<Game> => {
  bundle.valuePerDollar = bundle.amount / bundle.price;
  const response = await apiClient.post("/bundles", bundle);
  return response.data;
};

export const getBundlesByGameId = async (gameId: string): Promise<Bundle[]> => {
  const response = await apiClient.get(`/bundles?gameId=${gameId}`);
  return response.data;
};
