import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactsComponent = ({contacts}) => {
    return (
        <div>
            <h2>Nombre: { contacts.firstName }</h2>
            <h3>Apelluido: { contacts.lastName }</h3>
            <h4>Email: { contacts.email }</h4>
            <h5>
                Estado: { contacts.conected ? "Contacto En Línea" : "Contacto No Disponible"}
            </h5>
        </div>
    );
};


ContactsComponent.propTypes = {
    contacts: PropTypes.instanceOf(Contact)
};


export default ContactsComponent;
