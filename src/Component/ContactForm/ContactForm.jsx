import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ContactForm = ({ checkContacts, addContact }) => {
   
    const [name, setName] = useState(
        JSON.parse(localStorage.getItem('name') || "")
            )
    const [number, setNumber] = useState(
        JSON.parse(localStorage.getItem('number') || "")
    )


    useEffect(() => localStorage.setItem('name', JSON.stringify(name)), [name]);
    useEffect(() => localStorage.setItem('number', JSON.stringify(number)), [number]);
    
   

    const changeHandler = (e) => {
        if (e.target.name === "name") setName(e.target.value) ;
        if (e.target.name === "number") setNumber(e.target.value);

    }

    const submitHandler = e => {
        e.preventDefault();
        if (name.length > 1 && number.length > 1) {
            if (checkContacts.some((contact)=> contact.name === name)) { return alert("this contact olredy har")}
            const contacts = {
                id: uuidv4(),
                name: name,
                number: number,
            };
            addContact(contacts);
            reset();
        }
        else{ alert("EROR <input is empty>");}
    };

    const reset = () => {
            setName(" ")
            setNumber(" ")
    };

        return (
            <form onSubmit={(e) => submitHandler(e)} action="">
                <label htmlFor="">Name:
                    <input
                        name="name"
                        value={name}
                        type="text"
                        onChange={changeHandler}
                    />
                </label>
                <label htmlFor=""> Number:
                    <input
                        name="number"
                        value={number}
                        type="text"
                        onChange={changeHandler}
                    />

                </label>
                <button>Add contact</button>
            </form>
        );
}


export default ContactForm;

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}

