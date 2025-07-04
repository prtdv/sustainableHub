import amul from "../src/assets/Amul-Butter-100g.avif"
export interface products {
  image: string;
  cost: string;
  supplier: string;
  score: number;
  icon: string;
  quantity: number;
}



// Define your product data
const products = [
  {
    image: amul,
    cost: "$3.50",
    supplier: "Amul",
    score: 0.90,
    icon: "🟢", // Replace with actual icon or <img>
    quantity: 1,
  },
  {
    image: "https://cdn.pixabay.com/photo/2021/05/01/18/04/butter-6221701_1280.jpg", //can add all.
    cost: "$4.99",
    supplier: "KerryGold",
    score: 0.50,
    icon: "",
    quantity: 1,
  },
  {
    image: "https://cdn.pixabay.com/photo/2014/12/21/23/28/butter-576982_1280.png",
    cost: "$3.00",
    supplier: "President",
    score: 0.65,
    icon: "",
    quantity: 1,
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/06/15/14/05/cheese-5300800_1280.jpg",
    cost: "$2.50",
    supplier: "GoCheese",
    score: 0.70,
    icon: "",
    quantity: 1,
  },
];

export default products;