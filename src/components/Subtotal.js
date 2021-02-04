import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat renderText={(value) => (
          <>
            <p>
              subtotal( 0 items)
              <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator = {true}
        prefix={"₹"}
        >
      </CurrencyFormat>
    </div>
  );
}

export default Subtotal;
