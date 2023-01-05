import { Component } from 'react';
import shortid from 'shortid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  addContact = (values, actions) => {
    const { name, number } = values;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (this.chekExistName(name)) {
      window.alert(name + ' is already in contacts');
    } else if (this.chekExistNumber(number)) {
      window.alert('Number ' + number + ' is already in contacts');
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
      actions.resetForm();
    }
  };

  chekExistName = name => {
    const { contacts } = this.state;
    const normalizeName = name.toLowerCase();
    const existingContacts = contacts.filter(
      contact => contact.name.toLowerCase() === normalizeName
    );

    if (existingContacts.length) {
      return true;
    } else {
      return false;
    }
  };

  chekExistNumber = number => {
    const { contacts } = this.state;
    const existingContacts = contacts.filter(
      contact => contact.number === number
    );

    if (existingContacts.length) {
      return true;
    } else {
      return false;
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilterText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterText)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
