import { Button, Card, List, Result, Spin, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useFetchGames } from "../hooks/gamesHooks";

const { Title } = Typography;

function Games() {
  const navigate = useNavigate();
  const { data: games, isLoading, isError } = useFetchGames();

  if (isLoading) return <Spin />;
  if (isError)
    return (
      <Result status="error" title="Error" subTitle="Failed to load games." />
    );

  return (
    <>
      <Title>Bundle Comparator</Title>

      <Card
        title="Games"
        extra={
          <Button type="primary" onClick={() => navigate("/add-game")}>
            Add Game
          </Button>
        }
      >
        <List
          dataSource={games}
          renderItem={(game) => (
            <List.Item
              key={game.id}
              actions={[
                <Button
                  type="link"
                  onClick={() => navigate(`/games/${game.id}`)}
                >
                  View Game
                </Button>,
              ]}
            >
              {game.name}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}

export default Games;
