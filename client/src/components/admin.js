import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();
    
    const login = async (e) => {
        e.preventDefault();
        try {
            const body = {username, password};
            const response = await fetch("http://localhost:5000/admin", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then(res => {
                return res.json();
            })
            console.log(response);
            if(response && response==='Success') {
                navigate("/admin/events")
            }
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1>Admin panel</h1>
            <form>
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <button onClick={login}>Login</button>
            </form>
        </Fragment>
    );
}

export default Admin;