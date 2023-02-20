import { useState } from "react";

export default function BasketItem({ item, product }) {
  return (
    <div>
      <p>
        {product.name} {item.amout} = {product.price * item.amount}₺
      </p>
    </div>
  );
}
