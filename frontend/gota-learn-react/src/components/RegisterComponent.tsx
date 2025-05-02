import { useState } from "react";
import { Education } from "../ds/education.enum";
import { registerApiCall } from "../service/auth.service";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [education, setEducation] = useState<string>("");
    const [user_type, setUserType] = useState<string>("");
    const [expertises, setExpertises] = useState<string>("");
    const [registerInstructor, setRegisterInstructor] = useState<boolean>(false);

    const navigator = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const register = {
            username,
            password,
            email,
            address,
            education,
            expertises,
            user_type: registerInstructor ? "instructor" : "student"
        };
        console.log(register);
        registerApiCall(register)
            .then((res) => {
                console.log(res);
                setUsername("");
                setPassword("");
                setEmail("");
                setEducation("");
                setAddress("");
                setExpertises("");
                setUserType("");
                navigator("/login");
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Register Form</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Education</label>
                                    <select
                                        className="form-select"
                                        value={education}
                                        onChange={(e) => setEducation(e.target.value)}
                                    >
                                        <option value="">Select Education</option>
                                        {Object.values(Education).map((educationValue) => (
                                            <option key={educationValue} value={educationValue}>
                                                {educationValue}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {
                                    !registerInstructor && (
                                        <div className="form-group mb-3">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                        </div>
                                    )
                                }
                                {
                                    registerInstructor && (
                                        <div className="form-group mb-3">
                                            <label className="form-label">Expertises</label>
                                            <input type="text" className="form-control" placeholder="Enter expertises" value={expertises} onChange={(e) => setExpertises(e.target.value)} />
                                        </div>
                                    )
                                }
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" value="instructor" onChange={(e) => setRegisterInstructor(e.target.checked)} />
                                    <label className="form-check-label">Register as Instructor</label>
                                </div>
                                <button type="submit" onClick={handleRegister} className="btn btn-primary w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
