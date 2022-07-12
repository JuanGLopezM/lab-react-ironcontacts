// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";





function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5))
  return <div className="App">
  <table>  
        {contactList.map((pop) => {
          return < pop.picture pop.name pop.popularity/>;
        })}    

  </table>
  </div>;
}
export default App;

