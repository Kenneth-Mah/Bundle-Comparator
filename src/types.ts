export interface Bundle {
  id: string;
  gameId: string;
  name: string;
  amount: number;
  price: number;
}

export type CreateBundleRequest = Omit<Bundle, "id">;

export interface Game {
  id: string;
  name: string;
  bundles: Bundle[];
}

export type CreateGameRequest = Omit<Game, "id" | "bundles">;
