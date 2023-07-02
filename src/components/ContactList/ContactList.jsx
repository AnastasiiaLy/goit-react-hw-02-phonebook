import React from 'react';

import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactList__item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactList__delete_btn}
            onClick={() => onDeleteContact(contact.id)}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
