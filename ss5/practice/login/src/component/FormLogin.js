import React, {useState} from 'react';

export  default function FormLogin(props) {
    const [form, setForm] = useState({});

    const handleChange = (even) => {
        setForm({
            ...form,
            [even.target.name]: even.target.value
        });
    };

    const handleSubmit = () => {
        const isValid = form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!")
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div className={"custom-input"}>
                    <label>Username</label>
                    <input name={"username"} value={form.username || ""} onChange={handleChange}/>
                </div>
                <div className={"custom-input"}>
                    <label>Email</label>
                    <input name={"email"} value={form.email || ""} onChange={handleChange}/>
                </div>
                <div className={"custom-input"}>
                    <label>Password</label>
                    <input name={"password"} value={form.password || ""} onChange={handleChange}/>
                </div>
                <div className={"custom-input"}>
                    <label>ConfirmPassword</label>
                    <input name={"confirmPassword"} value={form.confirmPassword || ""} onChange={handleChange}/>
                </div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

