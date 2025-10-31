import React from "react";
import "./ProductGrid.css";
import img from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";
import img18 from "../assets/18.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import img21 from "../assets/21.png";
import img22 from "../assets/22.png";
import img23 from "../assets/23.png";
import img24 from "../assets/24.JPG";
import img25 from "../assets/25.JPG";
import img26 from "../assets/26.JPG";
import img27 from "../assets/27.png";
import img28 from "../assets/28.png";
import img29 from "../assets/29.png";
import img30 from "../assets/30.png";


const products = [
  { name: "Strawberry Cake", price: "$5.20", img: img },
  { name: "Chocolate Latte", price: "$4.50", img: img2 },
  { name: "Mocha Bliss", price: "$4.80", img: img3 },
  { name: "Berry Smoothie", price: "$4.70", img: img4 },
  { name: "Choco Croissant", price: "$3.80", img: img5 },
  { name: "Cheesecake Slice", price: "$5.00", img: img6 },
  { name: "Hot Chocolate", price: "$4.10", img: img7 },
  { name: "Berry Cupcake", price: "$3.90", img: img8 },
  { name: "Espresso Shot", price: "$3.00", img: img9 },
  { name: "Choco Donut", price: "$3.50", img: img10 },
  { name: "Affogato", price: "$4.40", img: img11 },
  { name: "Berry Parfait", price: "$5.20", img: img12 },
  { name: "Choco Cookie", price: "$3.20", img: img13 },
  { name: "Ice Coffee", price: "$4.00", img: img14 },
  { name: "Strawberry Milkshake", price: "$4.80", img: img15 },
  { name: "Chocolate Tart", price: "$5.50", img: img16 },
  { name: "Berry Macaron", price: "$4.20", img: img17 },
  { name: "Cappuccino", price: "$4.20", img: img18 },
  { name: "Choco Mousse", price: "$4.80", img: img19 },
  { name: "Strawberry Pie", price: "$4.70", img: img20 },
  { name: "Chocolate Brownie", price: "$3.90", img: img21 },
  { name: "Berry Cheesecake", price: "$5.30", img: img22 },
  { name: "Hot Latte", price: "$4.10", img: img23 },
  { name: "Choco Eclair", price: "$3.80", img: img24 },
  { name: "Strawberry Tart", price: "$5.00", img: img25 },
  { name: "Iced Mocha", price: "$4.50", img: img26 },
  { name: "Choco Pancakes", price: "$5.20", img: img27 },
  { name: "Berry Waffle", price: "$4.90", img: img28 },
  { name: "Chocolate Chip Cookie", price: "$3.50", img: img29 },
  { name: "Strawberry Smoothie", price: "$4.60", img: img30 },
];

export default function ProductGrid() {
  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <div className="grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.img} alt={p.name} />
            <div className="info">
              <h3>{p.name}</h3>
              <span>{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
