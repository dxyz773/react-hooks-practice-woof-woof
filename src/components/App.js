import React, { useEffect, useState } from "react";
import GoodDogFilter from "./GoodDogFilter";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";

function App() {
  const url = "http://localhost:3001/pups";
  const [pups, setPups] = useState([]);
  const [displayDog, setDisplayDog] = useState({});
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPups(data));
  }, []);

  function showDog(pup) {
    setDisplayDog(pup);
  }

  function isGoodDog(dog) {
    console.log(dog);
  }

  function onFilter() {
    setFilter((prev) => !prev);
  }
  const filtered = [...pups].filter((pup) => pup.isGoodDog === true);

  return (
    <div className="App">
      <GoodDogFilter onFilter={onFilter} filter={filter} />
      <DogBar showDog={showDog} pups={pups} />
      <DogSummary url={url} displayDog={displayDog} />
    </div>
  );
}

export default App;
