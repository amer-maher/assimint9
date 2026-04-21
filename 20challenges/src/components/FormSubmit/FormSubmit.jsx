import { useState } from "react"

const FormSubmit = () => {
    const [user, setUser] = useState({ name: "", email: "" })
    const [errors, setErrors] = useState({});
    const validate = () => {
        let newError = {}
        if (user.name.trim().length <= 3) {
            newError.name = "Name must be at least 3 characters";
        }
        if (!user.email.includes("@")) {
            newError.email = "Email must contain @";
        }
        return newError;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }
        else {
            setErrors({})
            console.log(user)
        }
    }


    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
                placeholder="Enter your name"
                value={user.name}
                onChange={(e) => {
                    setUser({
                        ...user,
                        name: e.target.value
                    }
                    )
                }}
            />
            <br /><br />
            <input type="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => {
                    setUser({
                        ...user,
                        email: e.target.value
                    })
                }
                }

            />
           {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <br /><br />

            <button type="submit">Submit</button>

            <p>
                hi {user.name}<br />
                your email is {user.email}
                </p>
        </form>
    )
}
export default FormSubmit
