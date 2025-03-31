import { Card } from "antd";
import { Bundle } from "../types";

interface BundleProps {
  bundle: Bundle;
}

function BundleCard({ bundle }: BundleProps) {
  return (
    <Card title={bundle.name} type="inner">
      <p>Amount: {bundle.amount}</p>
      <p>Price: {bundle.price}</p>
      <p>Value per Dollar: {bundle.valuePerDollar}</p>
    </Card>
  );
}

export default BundleCard;
