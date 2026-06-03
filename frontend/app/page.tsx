"use client";

import { useState } from 'react';

export default function LiquidityProtocol() {
  const [amount, setAmount] = useState('');

  const handleProvide = () => {
    alert(`Providing ${amount} liquidity (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Advanced Cross-Chain Liquidity</h1>

      <div className="space-y-4">
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Liquidity Amount" />
        <button onClick={handleProvide} className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Provide Liquidity
        </button>
      </div>
    </div>
  );
}