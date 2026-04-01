import React, { useEffect, useState } from "react";

function FnUnmount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("✅ Effect Run (Mounted / Updated)");

    const interval = setInterval(() => {
      console.log("⏱ Timer running...");
    }, 1000);

    return () => {
      console.log("🧹 Cleanup Run (Before Update / Unmount)");
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h2>Child Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

export default FnUnmount;