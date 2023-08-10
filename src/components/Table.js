import "./styling.css";

//add four <th> tags that hold text for "Name", "Type of Satellite", "Launch Date", and "Status".
//the <tbody> will use the map() function to render the data based on the button selected.
//iterate through the sat prop using map() using callbacks (id, data).
//the <tr> tag in the table body needs a key equal to the {id}.
//create four <td> tags. Using dot notation to assign the correct object key to each.
//the value of each <td> tag needs to correspond to the <th> tags.

//for the status create a conditional that will tell a user whether a satellite is acttive 
//or inactive based on its operational value.

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {sat.map((data, id) => (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
      </table>
  );
};

export default Table;