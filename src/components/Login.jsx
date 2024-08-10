import { useState } from "react";


export const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleFormChange = (e) => {
       e.preventDefault();
      const formData = {
        username,
        password
      }
      setUsername("");
      setPassword("");
    
      console.log(formData);
    };

    return(
        <div>
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleFormChange}>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    name="username"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="off"
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                    type="text" 
                    name="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="off"
                    />

                    <div>
                        <button type="submit" className="btn">
                           Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}