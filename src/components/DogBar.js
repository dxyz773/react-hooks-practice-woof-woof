function DogBar({ pups, showDog }) {
  const names = pups.map((pup) => (
    <span pup={pup} key={pup.id} onClick={() => showDog(pup)}>
      {pup.name}
    </span>
  ));

  return <div id="dog-bar">{names}</div>;
}

export default DogBar;
