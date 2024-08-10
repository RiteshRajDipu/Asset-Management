import { useState } from "react";
import "./Registration.css";

export const RegistrationForm = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <div className="container">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <h1>Change</h1>
                <p>Please fill in this form to create an account.</p>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="firstName">First Name</label>

                        <input
                            className="form-input"
                            type="text"
                            name="firstName"
                            placeholder="Enter fistName"
                            required
                            autoComplete="off"
                            value={user.firstName}
                            onChange={handleInputChange}

                        />



                    <div className="form-el">
                        <label htmlFor="lasttName" className="form-label">
                            Last Name
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="lastName"
                            placeholder="Enter lastName"
                            required
                            autoComplete="off"
                            value={user.lastName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-el">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            required
                            autoComplete="off"
                            value={user.email}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className="form-el">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            className="form-input"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-el">
                        <label htmlFor="phone" className="form-label">
                            Phone Number
                        </label>
                        <input
                            className="form-input"
                            type="phone"
                            name="phoneNumber"
                            placeholder="9625297358"
                            required
                            autoComplete="off"
                            value={user.phoneNumber}
                            onChange={handleInputChange}
                        />

                    </div>


                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dogerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>

                </form>

            </div>


            {/* <section className="summary" style={{textAlign: 'center', marginTop: "30px"}}
            >
             <p>
                Hello, my name is 
                <span>
                    {firstName} {lastName}
                </span>
                . My email address is <span>{email}</span> and my phone number is
                <span>{phoneNumber}</span>
             </p>  
            </section> */}
        </div>
    );
};