import { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import chekExistName from 'services/chekExistName';
import chekExistNumber from 'services/chekExistNumber';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);
  const isFirstLoadRef = useRef(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(() => {
    if (isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(values, actions) {
    const { name, number } = values;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (chekExistName(name, contacts)) {
      window.alert(name + ' is already in contacts');
    } else if (chekExistNumber(number, contacts)) {
      window.alert('Number ' + number + ' is already in contacts');
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
      actions.resetForm();
    }
  }

  function deleteContact(id) {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  }

  function changeFilter(evt) {
    setFilter(evt.currentTarget.value);
  }

  function getFilteredContacts() {
    const normalizeFilterText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterText)
    );
  }

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={changeFilter} />
        <ContactList
          contacts={getFilteredContacts()}
          onDelete={deleteContact}
        />
      </Section>
    </div>
  );
}
