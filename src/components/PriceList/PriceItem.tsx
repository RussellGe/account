import { PriceItem } from "../../typings/PriceList";
import "./index.less";

const PriceItemComp: React.FC<{ item: PriceItem }> = ({ item }) => {
  const { category, date, title } = item;
  return <div>123</div>;
};

export default PriceItemComp;
