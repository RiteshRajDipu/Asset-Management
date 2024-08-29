import "./updateFinalForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Field } from 'react-final-form';
import Warning from "../Warning";
import { remove, update } from "../../../store/slices/userSlice";

export default function UpdateFinalForm() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    // Dispatch the update action with form values
    dispatch(update(values));
    
    // Navigate after a short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove());

    setTimeout(() => {
        navigate("/");
    }, 2000);
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <Form
            onSubmit={onSubmit}
            initialValues={{
              username: user.name,
              email: user.email
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="formItem">
                  <label>Username</label>
                  <Field name="username">
                    {({ input }) => (
                      <input
                        className="formInput"
                        type="text"
                        placeholder={user.name}
                        {...input}
                      />
                    )}
                  </Field>
                </div>
                <div className="formItem">
                  <label>Email</label>
                  <Field name="email">
                    {({ input }) => (
                      <input
                        className="formInput"
                        type="text"
                        placeholder={user.email}
                        {...input}
                      />
                    )}
                  </Field>
                </div>
                <div className="formItem">
                  <label>Password</label>
                  <Field name="password">
                    {({ input }) => (
                      <input
                        className="formInput"
                        type="password"
                        {...input}
                      />
                    )}
                  </Field>
                </div>
                <button
                  className="updateButton"
                  type="submit" // Ensure button is of type "submit" for form submission
                >
                  Update
                </button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
