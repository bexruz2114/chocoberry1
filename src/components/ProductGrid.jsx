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
  { name: "Молочный шоколад", price: "220 000 сум", img: img },
  { name: "Тёмный шоколад", price: "250 000 сум", img: img2 },
  { name: "Белый шоколад", price: "230 000 сум", img: img3 },
  { name: "С карамелью", price: "270 000 сум", img: img4 },
  { name: "С орехами", price: "300 000 сум", img: img5 },
  { name: "С кокосом", price: "280 000 сум", img: img6 },
  { name: "С миндалём", price: "310 000 сум", img: img7 },
  { name: "С фисташками", price: "330 000 сум", img: img8 },
  { name: "Карамель и орехи", price: "350 000 сум", img: img9 },
  { name: "Белый шоколад и орехи", price: "360 000 сум", img: img10 },
  { name: "Тёмный шоколад с кокосом", price: "340 000 сум", img: img11 },
  { name: "Молочный шоколад с фисташками", price: "370 000 сум", img: img12 },
  { name: "С клубничным соусом", price: "260 000 сум", img: img13 },
  { name: "С ванильной крошкой", price: "220 000 сум", img: img14 },
  { name: "С миндальной крошкой", price: "300 000 сум", img: img15 },
  { name: "Орехи и мёд", price: "320 000 сум", img: img16 },
  { name: "Шоколадная стружка", price: "250 000 сум", img: img17 },
  { name: "Карамельные шарики", price: "280 000 сум", img: img18 },
  { name: "Кокос и шоколад", price: "310 000 сум", img: img19 },
  { name: "Дроблёные орехи", price: "330 000 сум", img: img20 },
  { name: "Белый шоколад с кокосом", price: "340 000 сум", img: img21 },
  { name: "Тёмный шоколад и орехи", price: "360 000 сум", img: img22 },
  { name: "Молочный шоколад с карамелью", price: "370 000 сум", img: img23 },
  { name: "Шоколадная глазурь", price: "220 000 сум", img: img24 },
  { name: "С фундуком", price: "320 000 сум", img: img25 },
  { name: "С арахисом", price: "300 000 сум", img: img26 },
  { name: "Карамельный топпинг", price: "280 000 сум", img: img27 },
  { name: "Шоколадные капли", price: "250 000 сум", img: img28 },
  { name: "Ореховая посыпка", price: "310 000 сум", img: img29 },
  { name: "Шоколадная крошка", price: "290 000 сум", img: img30 },
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
