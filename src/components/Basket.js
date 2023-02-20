import React from "react";
import BasketItem from "./BasketItem";

export default function Basket({ basket, products, total, resetBasket }) {
  return (
    <div className="flex items-start justify-center my-5 flex-col px-4 font-bold text-lg dark:text-white">
      {basket.map((item) => (
        <BasketItem item={item} product={products.find((p) => p.id === item.id)} />
      ))}

      <div className="flex items-center justify-start mt-4 gap-2">
        <p className="text-2xl font-bold dark:text-white ">Toplam:</p>
        <p className="text-2xl font-bold text-primary dark:text-white">{total} ₺</p>
      </div>

      <div className="w-full flex items-censter justify-center mt-4 border-t border-slate-200 pt-4">
        <button
          onClick={resetBasket}
          className="btn-normal rounded-lg flex items-center justify-center w-full md:w-[200px]"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
}
