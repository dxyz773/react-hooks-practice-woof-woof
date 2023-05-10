function GoodDogFilter({ onFilter, filter }) {
  return (
    <div id="filter-div">
      <button onClick={onFilter} id="good-dog-filter">
        {filter ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
      </button>
    </div>
  );
}

export default GoodDogFilter;
