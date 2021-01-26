import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <strong>
            Pay faster for all your shopping needs with{" "}
            <span className="color__Red">Amazon Pay balance</span>
          </strong>
          <br />
          <small>
            Get Instant refund on cancellations | Zero payment failures
          </small>

          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
