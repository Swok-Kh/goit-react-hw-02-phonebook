import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./Components/ContactList";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (this.state.contacts.find(({ name }) => name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    const contacts = [
      ...this.state.contacts,
      { id, name: this.state.name, number: this.state.number },
    ];
    this.setState({ contacts });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChangeInput={this.handleInput}
          onSubmitForm={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeInput={this.handleInput} />
        <ContactList
          contacts={
            this.state.filter
              ? this.state.contacts.filter(({ name }) =>
                  name
                    .toLocaleLowerCase()
                    .includes(this.state.filter.toLocaleLowerCase())
                )
              : this.state.contacts
          }
        />
      </div>
    );
  }
}

export default App;
