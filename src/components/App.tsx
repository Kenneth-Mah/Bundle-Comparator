import { useFetchGames } from "../hooks/gamesHooks";
import { useEffect, useState } from "react";
import { Game } from "../types";
import BundleCard from "./BundleCard";
import { Card, Select, Typography } from "antd";
import BundleFormModal from "./BundleFormModal";

const { Title } = Typography;

function App() {
  const { data: games, isLoading, isError, isFetching } = useFetchGames();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Sync selectedGame when games data changes
  useEffect(() => {
    if (!selectedGame || !games?.find((game) => game.id === selectedGame.id)) {
      setSelectedGame(null);
    }
  }, [games, selectedGame]);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error fetching games</p>;

  return (
    <>
      <Title>
        Bundle Comparator
        <Select
          onChange={(e) =>
            setSelectedGame(games?.find((g) => g.id === e) || null)
          }
          options={games?.map((game) => ({
            key: game.id,
            value: game.id,
            label: game.name,
          }))}
          defaultValue="Select a game"
          style={{ marginLeft: 16 }}
        />
      </Title>

      {selectedGame && (
        <Card
          title={selectedGame.name}
          extra={<BundleFormModal gameId={selectedGame.id} />}
        >
          <ul>
            {selectedGame.bundles.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} />
            ))}
          </ul>
        </Card>
      )}
    </>
  );
}

export default App;
