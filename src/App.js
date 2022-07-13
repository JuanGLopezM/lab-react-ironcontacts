// src/App.js
import React, { useState } from 'react';
import "./App.css";
import contacts from "./contacts.json";
import Button from 'react-bootstrap/Button';



const first5Contacts = contacts.splice(0, 5);

function App() {
  const [contactList, setContactList] = useState(first5Contacts)
  let copyArr = [...contactList]

  const addRandomContact = () => {   
    let randomContact =
      contacts[Math.floor(Math.random() * contacts.length) + 5];
    let existIn = contacts.indexOf(randomContact);
    if (randomContact) {
      copyArr.unshift(randomContact);
    }
    if (existIn > -1) {
      contacts.splice(existIn, 1);
    }
    setContactList(copyArr);
  };

  const sortByPopularity = () => {
    copyArr.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContactList(copyArr);
  };
  const sortByName = () => {
    copyArr.sort((a, b) => a.name.localeCompare(b.name));
    setContactList(copyArr);
  };

  const deleteContact = (actorID) => {
    setContactList(contactList.filter((c) => c !== actorID));
  };

  return (
  <div className="App">
  <Button className="buttons" onClick={addRandomContact}>Add random contact</Button>
  <Button className="buttons" onClick={sortByName}>Sort by name</Button>
  <Button className="buttons" onClick={sortByPopularity}>Sort by popularity</Button>
    <table className="tableActors">  
      <thead>
        <tr>
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity </th>
          <th> Won Oscar</th>
          <th> Won Emmy</th>
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
                <td>{actor.wonOscar ? "🏆" : ""}</td>
                <td>{actor.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      deleteContact(actor); 
                    }}
                    id={actor.id}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>  
    </table>
  </div>
  )
}
export default App;

