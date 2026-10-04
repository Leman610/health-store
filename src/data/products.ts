import food from "../assets/Food to live.png";
import peets from "../assets/Peets.png";
import turmeric from "../assets/Turmeric.png";
import fruit from "../assets/fruit-juice.png";
import hair from "../assets/Hair.png";
import type { Product } from "../components/ProductCard";

export const products: Product[] = [
  {
    id: 1,
    title: "Mint & Ginger Digestive Herbal Tea Lorem ipsum",
    image: food,
    percent: "35%",
    oldPrice: 5.75,
    newPrice: 5.75,
    seconds: 2 * 86400,
  },
  {
    id: 2,
    title: "Mint & Ginger Digestive Herbal Tea Lorem ipsum",
    image: peets,
    percent: "35%",
    oldPrice: 5.75,
    newPrice: 5.75,
    seconds: 86400,
  },
  {
    id: 3,
    title: "Mint & Ginger Digestive Herbal Tea Lorem ipsum",
    image: turmeric,
    percent: "35%",
    oldPrice: 5.75,
    newPrice: 5.75,
    seconds: 5 * 3600,
  },
  {
    id: 4,
    title: "Mint & Ginger Digestive Herbal Tea Lorem ipsum",
    image: fruit,
    percent: "35%",
    oldPrice: 5.75,
    newPrice: 5.75,
    seconds: 3 * 86400,
  },
  {
    id: 5,
    title: "Mint & Ginger Digestive Herbal Tea Lorem ipsum",
    image: hair,
    percent: "35%",
    oldPrice: 5.75,
    newPrice: 5.75,
    seconds: 12 * 3600,
  },
];
