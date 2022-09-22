
import ContactForm from "Component/ContactForm";
import ContactList from "Component/ContactList";
import Filter from "Component/Filter";
import { useEffect } from "react";
import { useState } from "react";

const data = [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]
  
 const App = () =>{
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || data )
    
   const [filter, setFilter] = useState("")
 
  
    
const setToLS = (key, data) =>  localStorage.setItem(key, JSON.stringify(data));
  
useEffect(() => {
    setToLS('contacts', contacts);
  }, [contacts]);
    
   const addContact = (contactsArr) => {
    setContacts([ contactsArr, ...contacts ])
    
  }

  const filterInput = (e) => {
    const input = e.target.value
    setFilter(input.trim())
  }

  const getFilteredContacts = () => {
    if (filter === "") {
      return contacts
    }
    else { return (contacts.filter(({ name, number }) => (name).toLowerCase().includes(filter) || (number).toLowerCase().includes(filter))) }

  }

   const deleteContact = (marcer) =>
   setContacts(contacts.filter(({ id }) => id !== marcer))
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: '1200px',
          
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        
        }}
      >
        <h1>Phonebook </h1>
        <ContactForm
          checkContacts={contacts}
          addContact={addContact} />
        <h2>Contacts</h2>
        <Filter filterInput={filterInput} />
        <ContactList contacts={getFilteredContacts()}
          deleteContact={deleteContact} />
      </div >
    );
 }
 export default App
