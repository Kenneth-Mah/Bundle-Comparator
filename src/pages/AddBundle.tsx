import { Button, Card, Form, Input, Typography } from "antd";
import { useAddBundle } from "../hooks/bundlesHooks";
import { CreateBundleRequest } from "../types";
import { useNavigate, useParams } from "react-router-dom";

const { Title } = Typography;

function AddBundle() {
  const { id: gameId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { mutate, isPending } = useAddBundle();

  const handleSubmit = (values: CreateBundleRequest) => {
    mutate(values, {
      onSuccess: () => navigate(`/games/${gameId}`),
    });
  };

  return (
    <>
      <Title>Bundle Comparator</Title>

      <Card title="Add Bundle">
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="gameId" initialValue={gameId} hidden />
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please input the bundle name" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[
              { required: true, message: "Please input the bundle amount" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please input the bundle price" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Button type="default" onClick={() => navigate(`/games/${gameId}`)}>
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

export default AddBundle;
