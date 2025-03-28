import { Button, Card, Result, Spin, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBundlesByGameId } from "../hooks/bundlesHooks";
import BundleCard from "../components/BundleCard";

const { Title } = Typography;

function ViewGame() {
  const { id: gameId } = useParams();
  const navigate = useNavigate();
  const { data: bundles, isLoading, isError } = useGetBundlesByGameId(gameId!);

  if (isLoading) return <Spin />;
  if (isError || !bundles)
    return (
      <Result status="error" title="Error" subTitle="Failed to load bundles." />
    );

  return (
    <>
      <Title>Bundle Comparator</Title>

      <Card
        title="Game Bundles"
        extra={
          <>
            <Button type="default" onClick={() => navigate("/")}>
              Back
            </Button>
            <Button
              type="primary"
              onClick={() => navigate(`/games/${gameId}/add-bundle`)}
              style={{ marginLeft: 8 }}
            >
              Add Bundle
            </Button>
          </>
        }
      >
        {bundles.length > 0 ? (
          bundles.map((bundle) => BundleCard({ bundle }))
        ) : (
          <Result
            status="info"
            title="No Bundles Found"
            subTitle="This game has no bundles."
          />
        )}
      </Card>
    </>
  );
}

export default ViewGame;
