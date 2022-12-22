import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import EmailFieldInput from './EmailFieldInput';


const InputField = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => console.log(data);
    const handleError = (errors) => { };

    const [showPassword, setShowPassword] = useState(false);



    const handlechange = (event) => {
        const name = event.target.value;
        console.log(name, "name")
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                <div style={{ display: "flex", flexDirection: "column", margin: "1.5em 0" }}>
                    <label style={{ textAlign: "left" }} >Name</label>
                    <input style={{ border: "1px solid gray ", borderRadius: "4px", width: "20em", padding: "10px 20px" }}
                        placeholder="Enter your name"
                        {...register("name", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[a-zA-Z][a-zA-Z ]*/i
                        })}
                    />
                    <small style={{ color: "red" }}>
                        {errors?.name?.type === "required" && <p>This field is required</p>}
                        {errors?.name?.type === "maxLength" && (
                            <p>Name cannot exceed 20 characters</p>
                        )}
                        {errors?.name?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </small>
                </div>
                <div style={{ display: "flex", flexDirection: "column", margin: "1.5em 0" }}>
                    <label style={{ textAlign: "left" }}>Email</label>
                    <input style={{ border: "1px solid gray ", borderRadius: "4px", width: "20em", padding: "10px 20px" }}
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/i
                        })}
                    />
                    <small style={{ color: "red", }}>
                        {errors?.email?.type === "required" && <p>This field is required</p>}
                        {errors?.email?.type === "pattern" && (
                            <p>Please enter a valid email</p>
                        )}
                    </small>
                </div>

                <div style={{ display: "flex", flexDirection: "column", margin: "1.5em 0" }}>
                    <label style={{ textAlign: "left" }}>Password</label>
                    <div style={{ display: "flex", border: "1px solid gray ", borderRadius: "4px", width: "20em", cursor: "pointer", alignItems: "center" }}>

                        <input style={{ height: "3em", paddingLeft: "10px" }}
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i
                            })}
                        />
                        <div onClick={() => setShowPassword(!showPassword)}>
                            <p style={{ paddingLeft: "10px", fontSize: "15px", color: "gray" }}>{showPassword ? "Hide" : "Show"}
                            </p>
                        </div>
                    </div>

                    <small style={{ color: "red" ,fontSize:"12px" ,textAlign:"left" }}>
                        {errors?.password?.type === "required" && <p>This field is required</p>}
                        {errors?.password?.type === "pattern" && (
                            <p >Password should contain Minimum eight and maximum 10 characters,<br /> at least one uppercase letter, one lowercase letter,<br /> one number and one special character:

                            </p>
                        )}
                    </small>
                </div>
                <div style={{ margin: "1.5em 0" }}>
                    <button style={{ border: "1px solid blue", width: "6em", height: "3em", color: "white", backgroundColor: "blue" }}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default InputField