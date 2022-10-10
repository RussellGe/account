export interface PriceItem {
  id: string;
  title: string;
  date: string;
  price: number;
  category: Category;
}

interface Category {
  name: string;
  id: string;
  type: "outcome" | "income";
}
