import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({ name, number, onChangeInput, onSubmitForm }) => {
  const nameId = uuidv4();
  const numberId = uuidv4();
  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor={nameId}>Name</label>
      <input
        name="name"
        type="text"
        onChange={onChangeInput}
        value={name}
        id={nameId}
      />
      <label htmlFor={numberId}>Number</label>
      <input
        name="number"
        type="text"
        onChange={onChangeInput}
        value={number}
        id={numberId}
      />
      <button>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
