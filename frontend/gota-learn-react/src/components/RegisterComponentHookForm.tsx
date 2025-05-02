
import { useForm, Controller } from "react-hook-form";
import { Education } from "../ds/education.enum";
import { registerApiCall } from "../service/auth.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterComponentWithHookForm() {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }, // Access errors from formState
    } = useForm();
    const [registeredInstructor, setRegisteredInstructor] =
        useState<boolean>(false);
    const navigator = useNavigate();

    const onSubmit = (data) => {
        const registerData = {
            ...data,
            user_type: registeredInstructor ? "instructor" : "student",
        };

        console.log(registerData);
        registerApiCall(registerData)
            .then((res) => {
                console.log(res);
                reset();
                navigator("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="offset-3 col-md-6">
                    <div className="border border-1 border-primary p-3 rounded shadow-lg">
                        <h1>Register Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.username ? "is-invalid" : ""
                                        }`}
                                    {...register("username", {
                                        required: "Username is required",
                                        minLength: {
                                            value: 3,
                                            message: "Username must be at least 3 letters",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Username cannot exceed 20 letters",
                                        },
                                        pattern: {
                                            value: /^[A-Za-z]+$/, // Regex to allow only letters
                                            message: "Username should contain only letters", // Error message
                                        },
                                        validate: (value) =>
                                            value.toLowerCase() !== "admin" ||
                                            "Username cannot be 'admin' or 'ADMIN'", // Custom validation
                                    })}
                                />
                                {errors.username && (
                                    <div className="invalid-feedback">
                                        {errors.username.message}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? "is-invalid" : ""
                                        }`}
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email.message}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Education</label>
                                <Controller
                                    name="education"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Education is required" }}
                                    render={({ field }) => (
                                        <select
                                            className={`form-select ${errors.education ? "is-invalid" : ""
                                                }`}
                                            {...field}
                                        >
                                            <option value="">Select Education</option>
                                            {Object.values(Education).map((educationValue) => (
                                                <option key={educationValue} value={educationValue}>
                                                    {educationValue}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.education && (
                                    <div className="invalid-feedback">
                                        {errors.education.message}
                                    </div>
                                )}
                            </div>

                            {!registeredInstructor && (
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.address ? "is-invalid" : ""
                                            }`}
                                        {...register("address", {
                                            required: "Address is required",
                                        })}
                                    />
                                    {errors.address && (
                                        <div className="invalid-feedback">
                                            {errors.address.message}
                                        </div>
                                    )}
                                </div>
                            )}

                            {registeredInstructor && (
                                <div className="mb-3">
                                    <label className="form-label">Expertises</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.expertises ? "is-invalid" : ""
                                            }`}
                                        {...register("expertises", {
                                            required: "Expertisse is required",
                                        })}
                                    />
                                    {errors.experties && (
                                        <div className="invalid-feedback">
                                            {errors.expertises.message}
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={(e) => setRegisteredInstructor(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Register as instructor
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}