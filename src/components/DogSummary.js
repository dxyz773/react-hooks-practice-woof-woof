import { useState } from "react";

function DogSummary({ displayDog, url }) {
  const [isGood, setIsGood] = useState(false);

  function handleGoodDog() {
    fetch(`${url}/${displayDog.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...displayDog, isGoodDog: isGood }),
    }).then(setIsGood((prev) => !prev));
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={displayDog.image} alt={displayDog.name}></img>
        <h2>{displayDog.name}</h2>
        <button onClick={handleGoodDog}>
          {isGood ? "Good Dog!" : "Bad Dog!"}
        </button>
      </div>
    </div>
  );
}

export default DogSummary;
