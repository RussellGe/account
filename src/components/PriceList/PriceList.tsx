import React from "react";
import { PriceItem as PriceItemProps } from "../../typings/PriceList";
import "./index.less";
import PriceItem from "./PriceItem";

interface PriceListProps {
  items: PriceItemProps[];
  onModifyItem: (item: PriceItemProps) => void;
  onDeleteItem: (item: PriceItemProps) => void;
}

const PriceList: React.FC<PriceListProps> = ({
  items,
  onModifyItem,
  onDeleteItem,
}) => {
  return (
    <div className="card">
      {items.map((item) => (
        <PriceItem item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default PriceList;
