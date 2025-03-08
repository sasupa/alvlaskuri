import React, { useState } from "react";

const Laskuri = () => {
  const [amount, setAmount] = useState(""); // Input amount
  const [vatRate, setVatRate] = useState(25.5); // Default VAT %
  const vatRates = [25.5, 14, 10]; // VAT options

  // Convert VAT rate to decimal
  const vatMultiplier = vatRate / 100;

  // VAT Added (Amount does NOT include VAT)
  const vatAmountAdded = amount ? (amount * vatMultiplier) : 0;
  const totalWithVat = amount ? parseFloat(amount) + vatAmountAdded : 0;

  // VAT Included (Amount ALREADY includes VAT)
  const netAmount = amount ? amount / (1 + vatMultiplier) : 0;
  const vatAmountIncluded = amount ? amount - netAmount : 0;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">VAT Calculator</h2>
      <form className="space-y-4">
        
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium">Amount (€)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || parseFloat(value) >= 0) {
                setAmount(value);
              }
            }}
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
          />
        </div>

        {/* VAT Dropdown */}
        <div>
          <label className="block text-sm font-medium">VAT Rate (%)</label>
          <select
            value={vatRate}
            onChange={(e) => setVatRate(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            {vatRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </select>
        </div>

        {/* VAT Added Output */}
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-sm font-semibold mb-1">VAT Added</h3>
          <p className="text-sm">
            VAT Amount: <strong>€{vatAmountAdded.toFixed(2)}</strong>
          </p>
          <p className="text-sm">
            Total with VAT: <strong>€{totalWithVat.toFixed(2)}</strong>
          </p>
        </div>

        {/* VAT Included Output */}
        <div className="p-4 bg-gray-200 rounded-md">
          <h3 className="text-sm font-semibold mb-1">VAT Included</h3>
          <p className="text-sm">
            VAT Amount: <strong>€{vatAmountIncluded.toFixed(2)}</strong>
          </p>
          <p className="text-sm">
            Net Amount (excl. VAT): <strong>€{netAmount.toFixed(2)}</strong>
          </p>
        </div>

      </form>
    </div>
  );
};

export default Laskuri;