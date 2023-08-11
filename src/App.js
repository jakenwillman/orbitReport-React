import Buttons from "./components/Buttons.js";
import Table from "./components/Table.js";
import Banner from "./components/Banner.js";

//1)import useState from "react"
import { useState } from "react";

//2)import sataData.js as satData
import satData from "./components/satData.js";


//3)inside the App() function create the first variable, an array of two variables sat and setSat.
//setSat is a function that will be used to update the state. Set this array equal to the useState function. 
//useState is passed satData

//4)create the second variable called displaySats.
//displaySats uses the Set method to create a new array that holds unique elements.
//this method is used to create the three correlating buttons using the orbitType values in satData.

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  

//1)create an arrow function called filterByType that takes a parameter of (currentType)
//2)inside this function, update filteredSats using the filter() method.
//3)filter() requires a callback called (newSatDisplay).
//4)the filter method will then return newSatDisplay.orbitType that is equal to currentType.
//5)close the filter functions return statement
//6)update setSat by passing it the newly updated (filteredSats)

  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };

//provide props for the Buttons and Table components.
  return (
    <>
    <Banner />
    <Buttons 
    filterByType={filterByType} 
    setSat={setSat} 
    displaySats={displaySats}
    />
    <Table sat={sat}/>
    </>
    
  );
};

export default App;
