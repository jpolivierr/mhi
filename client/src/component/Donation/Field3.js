import React from "react"

const Field3 = () => {
  return (
    <div className="Field">
      <div className="header-section">
        <h3>Payment Info</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>
      <div className="block">
        <h4>Select an Amount</h4>
        <div className="block-button-container">
          <div className="block-button block-price">$15</div>
          <div className="block-button block-price">$30</div>
          <div className="block-button block-price">$50</div>
          <div className="block-button block-price">$100</div>
        </div>
      </div>
      <div className="block">
        <h4>Card Info</h4>
        <div className="block-button-container">
          <input type="text" placeholder="*Card Holder Name" />
          <input type="text" placeholder="*Card Number" />
          <input type="text" placeholder="*Exp" />
          <input type="email" placeholder="*Year" />
          <input type="text" placeholder="*Security Code" />
        </div>
      </div>
    </div>
  )
}

export default Field3
