import { useState } from "react";
import { loginApiCall, setLoggedInUserName, setLoggedInUserRole, setToken } from "../service/auth.service";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const login = {username, password};
        loginApiCall(login)
        
        .then(res => {
            const token = 'Basic ' + window.btoa(`${username}:${password}`);
            setToken(token);
            setLoggedInUserName(username);
            setLoggedInUserRole(res.data);
            setUsername("");
            setPassword("");
            navigator("/");
            window.location.reload();
        })

    }

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h4>Login Form</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter username" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
