import { Card } from "antd";
import { Bundle } from "../types";

interface BundleProps {
  bundle: Bundle;
}

function BundleCard({ bundle }: BundleProps) {
  return (
  <Card title={bundle.name}>
    <p>Amount: {bundle.amount}</p>
    <p>Price: {bundle.price}</p>
  </Card>
  );
}

export default BundleCard;