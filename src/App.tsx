import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PriceList from "./components/PriceList";
import { PriceItem } from "./typings/PriceList";

const list: PriceItem[] = [
  {
    id: "1",
    title: "云南旅游",
    date: "2018-09-10",
    price: 400,
    category: {
      name: "旅游",
      id: "1",
      type: "outcome",
    },
  },
  {
    id: "2",
    title: "旅游",
    date: "2018-09-12",
    price: 600,
    category: {
      name: "旅游",
      id: "1",
      type: "outcome",
    },
  },
];

function App() {
  const onModityItem = (item: PriceItem) => {};
  const onDeleteItem = (item: PriceItem) => {};
  return (
    <div className="App">
      <PriceList
        items={list}
        onModifyItem={onModityItem}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
