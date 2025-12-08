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
import img31 from "../assets/31.png"
import img32 from "../assets/32.png"
import img33 from "../assets/33.png"



const products = [
  { name: "Клубника в шоколаде 8 штук с подарочным упаковкой ", price: "300 000 сум", img: img },
  { name: "Клубника в шоколаде с лесными ягодами", price: "480 000 сум", img: img2 },
  { name: "Клубника и банан в шоколаде ассорти", price: "600 000 сум", img: img3 },
  { name: "Клубника в шоколаде с надписью", price: "450 000 сум", img: img4 },
  { name: "Клубника в шоколаде с лесными ягодами", price: "450 000 сум", img: img5 },
  { name: "20 штук клубники в шоколаде с белым и молочным шоколадом", price: "320 000 сум", img: img6 },
  { name: "Большой набор клубники в шоколаде с ягодами в шоколаде 40 см ", price: "1.350 000 сум", img: img7 },
  { name: "Клубника в шоколаде с ежевикой", price: "400 000 сум", img: img8 },
  { name: "Клубника в шоколаде с надписью", price: "350 000 сум", img: img9 },
  { name: " 4 ассортимент фруктов Голубика,Малина,Банан, клубника в шоколаде", price: "880 000 сум", img: img10 },
  { name: " Клубника в шоколаде с белым и молочным шоколадом с посыпками", price: "300 000 сум", img: img11 },
  { name: "Клубника в шоколаде с сублимироваными фруктами", price: "350 000 сум", img: img12 },
  { name: "клубника в белом и молочном шоколаде с свежими малинами", price: "500 000 сум", img: img13 },
  { name: "Клубника в шоколаде с ягодами 25 штук ", price: "380 000 сум", img: img14 },
  { name: "Клубника в шоколаде с малиной 30 см 30+ штук ", price: "400 000 сум", img: img15 },
  { name: " Клубника в шоколаде именной 30 см с ягодами", price: "650 000 сум", img: img16 },
  { name: "Большая каробка в виде сердечко с клубникой в шоколаде ", price: "1.350 000 сум", img: img17 },
  { name: "Круглая каробка с клубникой в шоколаде и с надписью 30 см ", price: "650 000 сум", img: img18 },
  { name: "Клубника в шоколаде с коробкой в виде сердечко ♥️ и надпись ", price: "450 000 сум", img: img19 },
  { name: "Набор 30 см с клубникой в шоколаде", price: "650 000 сум", img: img20 },
  { name: "Клуглая каробка  с клубникой в шоколаде индивидуальный дизайн ", price: "700 000 сум", img: img21 },
  { name: "Каттаси 40 см клубника в шоколаде с клубничным,белым,и молочным шоколадом С добавлением голубики  ", price: "1.400 000 сум", img: img22 },
  { name: "Молочный шоколад с карамелью", price: "700 000 сум", img: img23 },
  { name: "Клубника в шоколаде с розами", price: "1.300 000 сум", img: img24 },
  { name: "Клубника в шоколаде", price: "250 000 сум", img: img25 },
  { name: "20 штук клубники в шоколаде ", price: "320 000 сум", img: img26 },
  { name: "Большое количество клубники в шоколаде 40 см", price: "1.200 000 сум", img: img27 },
  { name: "Клубника в шоколаде", price: "700 000 сум", img: img28 },
  { name: "Клубника в шоколаде малинкий", price: "250 000 сум", img: img29 },
  { name: "Клубника в белом и молочном шоколаде индивидуальный дизайн 25 штук ", price: "400 000 сум", img: img30 },
  { name: "Клубника в шоколаде", price: "150 000 сум", img: img31 },
  { name: "Клубника в шоколаде", price: "650 000 сум", img: img32 },
  { name: "Клубника в шоколаде", price: "1.200 000 сум", img: img33 },

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
