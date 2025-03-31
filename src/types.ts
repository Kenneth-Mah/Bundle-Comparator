export interface Bundle {
  id: string;
  gameId: string;
  name: string;
  amount: number;
  price: number;
  valuePerDollar: number;
}

export type CreateBundleRequest = Omit<Bundle, "id | valuePerDollar">;

export interface Game {
  id: string;
  name: string;
  bundles: Bundle[];
}

export type CreateGameRequest = Omit<Game, "id" | "bundles">;
