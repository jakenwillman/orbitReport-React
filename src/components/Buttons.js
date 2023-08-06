import satData from "./components/satData.js";

const Buttons = () => {
  return (
    <div>
      {displaySats.map((sat,id) => {
        return (
          <button onClick={() => filterByType(sat)}key={id}>
            {sat} Orbit
            </button>
          );
      })}
      
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;