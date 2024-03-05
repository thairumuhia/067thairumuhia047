import React, { useEffect, useState } from "react";
import trash from "../Assets/trash-icon.png";
import "./CartList.css";

const CartList = ({ cart, setCart }) => {
  const [CART, setCART] = useState([]);

  const handleDelete = (data) => {
    const newCart = CART.filter((item) => item !== data);
    setCART(newCart);
  };

  console.log("CART", CART);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div>
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div className="cart">
            <img src={cartItem.url} height={70} width={70} />
            <div className="cart_name">
              <span>{cartItem.name}</span>
            </div>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartIndex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <div className="cartquantity">{cartItem.quantity}</div>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span>Ksh {cartItem.price * cartItem.quantity}/=</span>s
            <button
              onClick={() => {
                setCart(CART);
                handleDelete(cartItem);
                console.log("cart 2", cart);
              }}
            >
              <img src={trash} width={20} height={20} />
            </button>
          </div>
        );
      })}
      <div className="total">
        <p>
          {" "}
          <h2>
            {" "}
            TOTAL = Ksh .
            {CART.map((item) => item.price * item.quantity).reduce(
              (total, value) => total + value,
              0
            )}
            /=
          </h2>
        </p>
      </div>

      <hr />
    </div>
  );
};

export default CartList;
