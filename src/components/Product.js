import { useState } from "react";

export default function Product(
  { product, basket, setBasket, total, money } // Destructuring
) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter((item) => item.id !== product.id), checkBasket]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter((item) => item.id !== product.id);
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket(basketWithoutCurrent);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="bg-primary/10 productsCard md:w-[49.50%] w-full rounded-md">
      <div className="flex items-center md:items-start flex-col justify-center px-12 py-6 gap-2 ">
        <h5 className="text-lg md:text-2xl font-bold text-start dark:text-white">{product.name}</h5>
        <span className="text-lg md:text-xl font-semibold  text-primary flex items-center  justify-center dark:text-white">
          {product.price}₺
        </span>
        <div className="flex items-center mt-2 actions ">
          <button disabled={!basketItem} onClick={removeBasket} className="btn-normal dark:text-white">
            Çıkart
          </button>
          <span className="amount font-bold text-sm md:text-xl w-15 text-center flex items-center justify-center dark:text-white ">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button disabled={total + product.price > money} onClick={addBasket} className="btn-normal dark:text-white">
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
