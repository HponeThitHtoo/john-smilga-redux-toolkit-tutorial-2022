import React from "react";
import { useDispatch } from "react-redux";

import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside
      className="modal-container"
      onClick={() => alert("Backdrop is Clicked!")}
    >
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={(event) => {
              event.stopPropagation();
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={(event) => {
              event.stopPropagation();
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
