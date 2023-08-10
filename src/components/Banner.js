import "./styling.css";


//create a Banner function that returns a <header> tag that says "Orbit Report"
//it should also create a <p> tag with instructions for the users.


function Banner() {
    return(
        <header>
            <h1>Orbit Report</h1>
            <p>Click on the buttons to see the satellites in that orbit type</p>
        </header>
    );
}

//export this Banner function and then import the component in App.js
//nest the Banner component inside the App() function in App.js

export default Banner;