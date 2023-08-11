import "./styling.css";

//1)import satData as satData
import satData from "./satData.js";

//2)pass in the props created from the App() function filterByType, setSat, and displaySats.
//3)Update the first button:
  //This function returns a <div> that uses the map method to iterate over displaySats
  //Provide two callbacks for the map() function (id, sat).
  //The map() function will return the first <button>.
  //Inside the <button> tag create an onClick method that points to the fiterByType function.
  //Set the key equal to id.
  //between the <button> tags replace "Placeholder Button" with {sat} Orbit.

//update the second button outside of the map function
//inside this <button> tag create an onClick function that points to setSat passing in satData
const Buttons = ({displaySats, setSat, filterByType}) => {
  return (
    <div className="flex-container">
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