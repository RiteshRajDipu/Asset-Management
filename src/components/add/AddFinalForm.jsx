import { useField, Form } from 'react-final-form';
import PropTypes from 'prop-types';
import "./add.scss";

// Validation functions
const required = (value) => (value ? undefined : 'required');
const emailValidator = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const phoneValidator = (value) =>
  value && !/^\d{10}$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

// Custom input component using useField
const CustomInput = ({ name, type, placeholder, validate }) => {
  const {
    input,
    meta: { touched, error }
  } = useField(name, { validate });

return (
    <div>
      <input {...input} type={type} placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};


const AddFinalForm = (props) => {
  const onSubmit = (values) => {
    props.onAdd(values);
  };

  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add New {props.slug}</h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {props.columns
                .filter(item => item.field !== "id" && item.field !== "img")
                .map(column => (
                  <div className="item" key={column.field}>
                    <label>{column.headerName}</label>
                    <CustomInput
                      name={column.field}
                      type={column.type}
                      placeholder={column.field}
                      validate={
                        column.field === 'email' ? emailValidator :
                        column.field === 'phone' ? phoneValidator :
                        required
                      }
                    />
                  </div>
                ))}
              <button type="submit">Send</button>
            </form>
          )}
        />
      </div>
    </div>
  );
}

AddFinalForm.propTypes = {
  setOpen: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      dataValue: PropTypes.string
    })
  ).isRequired
};

// PropTypes validation
CustomInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    validate: PropTypes.func
  };

export default AddFinalForm;
