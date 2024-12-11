import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Usa react-icons para íconos
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge bg-danger ms-2">3</span>
    </div>
  );
};

export default CartWidget;
