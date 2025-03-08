import React from "react";
import { useState } from "react";

const Laskuri = () => {
  const [amount, setAmount] = useState(""); // Input amount
  const [vatRate, setVatRate] = useState(20); // Default VAT %
  const vatRates = [10, 14, 25.5]; // VAT options

  // Calculate VAT and final price
  const vatAmount = amount ? (amount * vatRate) / 100 : 0;
  const finalAmount = amount ? parseFloat(amount) + vatAmount : 0;

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>VAT Calculator</h2>
      <form className='space-y-4'>
        {/* Amount Input */}
        <div>
          <label className='block text-sm font-medium'>Amount (€)</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              // Check if the value is a positive number or zero
              if (value === "" || parseFloat(value) >= 0) {
                setAmount(value); // Set the value if it's valid
              }
            }}
            className='w-full p-2 border rounded'
            placeholder='Enter amount'
          />
        </div>

        {/* VAT Dropdown */}
        <div>
          <label className='block text-sm font-medium'>VAT Rate (%)</label>
          <select
            value={vatRate}
            onChange={(e) => setVatRate(Number(e.target.value))}
            className='w-full p-2 border rounded'
          >
            {vatRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
        </div>

        {/* Output */}
        <div className='p-4 bg-gray-100 rounded-md'>
          <p className='text-sm'>
            VAT Amount: <strong>€{vatAmount.toFixed(2)}</strong>
          </p>
          <p className='text-sm'>
            Total with VAT: <strong>€{finalAmount.toFixed(2)}</strong>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Laskuri;
