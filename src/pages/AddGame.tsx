import { Button, Card, Form, Input, Typography } from "antd";
import { useAddGame } from "../hooks/gamesHooks";
import { CreateGameRequest } from "../types";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function AddGame() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { mutate, isPending } = useAddGame();

  const handleSubmit = (values: CreateGameRequest) => {
    mutate(values, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <>
      <Title>Bundle Comparator</Title>

      <Card title="Add Game">
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Game Name"
            rules={[{ required: true, message: "Please input the game name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="default" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={isPending}
              style={{ marginLeft: 8 }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default AddGame;
