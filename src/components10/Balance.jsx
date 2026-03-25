import React, { useState } from "react";
/* import "./Balance.css"; */

function Balance() {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState(0);
  
  const handleAmount = () => {
    setAmount(event.target.value);
    console.log(event.target.value);
    console.log(event);
  };
  const handleAdd = () => {
    setBalance(balance + Number(amount));
  };
  const handleSub = () => {
    setBalance(balance - Number(amount));
  };
  return (
    <>
      <h1>My Account Balance: {balance}</h1>
      <p>Enter Amouont</p>
      <input type="number" value={amount} onChange={handleAmount} />
      <button onClick={handleAdd}>Add Cash</button>
      <button onClick={handleSub}>Withdrow Balance</button>
    </>
  );
}

export default Balance;