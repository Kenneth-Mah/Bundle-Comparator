export interface Bundle {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface Game {
  id: string;
  name: string;
  bundles: Bundle[];
}