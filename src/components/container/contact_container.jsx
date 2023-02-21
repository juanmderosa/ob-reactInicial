
import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";
import ContactsComponent from '../pure/contacts';

const ContactContainer = () => {


    const defaultContact = new Contact("Juan", "López", "juanlopez@prueba.com", false);

    return (
        <div>
            <h2>Contact Info</h2>
            <ContactsComponent contacts={defaultContact}/>
        </div>
    );
};



export default ContactContainer;
