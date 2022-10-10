import { PriceItem } from "../typings/PriceList";

interface PriceListProps {
  items: PriceItem[];
  onModifyItem: (item: PriceItem) => void;
  onDeleteItem: (item: PriceItem) => void;
}

const PriceList: React.FC<PriceListProps> = ({
  items,
  onModifyItem,
  onDeleteItem,
}) => {
  return (
    <div>
      {items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default PriceList;
