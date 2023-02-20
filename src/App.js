import { useState, useEffect } from "react";
import Header from "./components/Header";
import products from "./products.json";
import Basket from "./components/Basket";
import Product from "./components/Product";

import "./index.css";

export default function App() {
  const [basket, setBasket] = useState([]); // [
  const [money] = useState(8500);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]); // Basket'i sıfırlamak icin kullanılır.
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + item.amount * (products.find((product) => product.id === item.id).price || 0);
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <div className="flex md:flex-wrap gap-4 flex-nowrap flex-col md:flex-row px-4">
        {products.map((product) => (
          <Product
            key={product.id}
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
      {
        // Basket'i sadece sepete eklenen ürün varsa göster.
        basket.length > 0 && <Basket basket={basket} products={products} total={total} resetBasket={resetBasket} />
      }
    </>
  );
} // App.js
