import React, { useState } from "react";
import "./Laskuri.css"; // Import the CSS file

const Laskuri = () => {
  const [amount, setAmount] = useState(""); // Input amount
  const [vatRate, setVatRate] = useState(25.5); // Default VAT %
  const vatRates = [25.5, 14, 10]; // VAT options

  // Convert VAT rate to decimal
  const vatMultiplier = vatRate / 100;

  // VAT Added (Amount does NOT include VAT)
  const vatAmountAdded = amount ? amount * vatMultiplier : 0;
  const totalWithVat = amount ? parseFloat(amount) + vatAmountAdded : 0;

  // VAT Included (Amount ALREADY includes VAT)
  const netAmount = amount ? amount / (1 + vatMultiplier) : 0;
  const vatAmountIncluded = amount ? amount - netAmount : 0;

  return (
    <div className='calculator-container'>
      <h2 className='title'>VAT Calculator</h2>
      <form className='form-container'>
        {/* Amount Input */}
        <div className='form-group'>
          <label>Amount (€)</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || parseFloat(value) >= 0) {
                setAmount(value);
              }
            }}
            placeholder='Enter amount'
          />
        </div>

        {/* VAT Dropdown */}
        <div className='form-group'>
          <label>VAT Rate (%)</label>
          <select
            value={vatRate}
            onChange={(e) => setVatRate(Number(e.target.value))}
          >
            {vatRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
        </div>

        {/* VAT Added Output */}
        <div className='output-box'>
          <h3>VAT Added</h3>
          <p>
            VAT Amount: <strong>€{vatAmountAdded.toFixed(2)}</strong>
          </p>
          <p>
            Total with VAT: <strong>€{totalWithVat.toFixed(2)}</strong>
          </p>
        </div>

        {/* VAT Included Output */}
        <div className='output-box'>
          <h3>VAT Included</h3>
          <p>
            VAT Amount: <strong>€{vatAmountIncluded.toFixed(2)}</strong>
          </p>
          <p>
            Net Amount (excl. VAT): <strong>€{netAmount.toFixed(2)}</strong>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Laskuri;
