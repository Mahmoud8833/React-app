import React, { useState } from "react";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password);
    }

    return (
        <>
            <h2>login</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
            />
            {"  "}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {"  "}
            <button
                onClick={handleSubmit}
            >Login</button>
        </>

    );
}

export default Login;
