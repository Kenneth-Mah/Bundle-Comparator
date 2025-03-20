import { useGames } from "../hooks/gamesHooks";
import { useState } from "react";
import { Game } from "../types";
import BundleCard from "./BundleCard";
import { Select, Typography } from "antd";

const { Title } = Typography

function App() {
  const { data: games, isLoading, error } = useGames();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching games</p>;

  return (
    <>
      <Title>Bundle Comparator</Title>
      <Select
        onChange={(e) => setSelectedGame(games?.find(g => g.id === e) || null)}
        options={games?.map((game) => ({ key: game.id, value: game.id, label: game.name }))}
        defaultValue="Select a game"
      />

      {selectedGame && (
        <div>
          <Title level={2}>{selectedGame.name}</Title>
          <ul>
            {selectedGame.bundles.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App
