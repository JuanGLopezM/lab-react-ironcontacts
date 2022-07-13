// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";



const first5Contacts = contacts.splice(0, 5);

function App() {
  const [contactList, setContactList] = useState(first5Contacts)
  return (
  <div className="App">
    <table className="tableActors">  
      <thead>
        <tr>
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity </th>
        </tr>
      </thead>
      <tbody>
          {contactList.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img
                    src={actor.pictureUrl}
                    width="100px"
                    height="120px"
                    alt="Actor"
                  />
                </td>
                <td> {actor.name} </td>
                <td> {Number(actor.popularity).toFixed(2)}</td>
              </tr>
            );
          })}
      </tbody>  
    </table>
  </div>
  )
}
export default App;

