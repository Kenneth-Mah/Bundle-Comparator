import { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { Bundle } from "../types";
import { useAddBundle } from "../hooks/bundlesHooks";

interface BundleFormModalProps {
  gameId: string;
}

const BundleFormModal: React.FC<BundleFormModalProps> = ({ gameId }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { mutate, isPending } = useAddBundle();

  const handleSubmit = (values: Omit<Bundle, "gameId">) => {
    mutate(
      { gameId, data: values },
      {
        onSuccess: () => {
          form.resetFields();
          setOpen(false);
        },
      }
    );
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => setOpen(true)}
        style={{ float: "right" }}
      >
        Add Bundle
      </Button>

      <Modal
        title="Add Bundle"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null} // Hides default footer buttons
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="id" label="ID" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>
              Submit
            </Button>
            <Button
              type="default"
              onClick={() => setOpen(false)}
              style={{ marginLeft: 8 }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BundleFormModal;
