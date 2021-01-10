import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./Components/ContactList";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import styles from './app.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (obj) => {
    const id = uuidv4();
    if (obj.name === '') {
      alert('Input is empty');
      return;
    }
    if (this.state.contacts.find(({ name }) => name === obj.name)) {
      alert(`${obj.name} is already in contacts`);
      return;
    }
    const contacts = [
      ...this.state.contacts,
      { id, name: obj.name, number: obj.number },
    ];
    this.setState({ contacts });
  };
  handleFiter() {
    return this.state.filter
      ? this.state.contacts.filter(({ name }) =>
        name
          .toLocaleLowerCase()
          .includes(this.state.filter.toLocaleLowerCase())
      )
      : this.state.contacts
  }
  render() {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter value={this.state.filter} onChangeInput={this.handleInput} />
        <ContactList contacts={this.handleFiter()}
        />
      </div>
    );
  }
}

export default App;
