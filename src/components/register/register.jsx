import { useState } from "react";
import { useNavigate } from "react-router";
import { nabnakClient } from "../../common/remote/nabnak-client";

export default function Register() {
    const navigate = useNavigate();
    const [wasPersisted, setWasPersisted] = useState();
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        password: "",
        experienceMonths: "",
    });

    async function register(e) {
        e.preventDefault();
        try {
            await nabnakClient.post("/member", formData);
            setWasPersisted(`User successfully registered nagivating to login...`);
            // setTimeout requires anonmyous function to call other functions/satements and then time in milliseconds
            setTimeout(() => navigate("/login"), 5000);
        } catch (error) {
            if (error.response.status === 400) {
                setWasPersisted(`The following issues occured: ${error.response.data}`);
            }
        }
    }

    return (
        <>
            <form>
                <label>Email:</label>
                <input
                    class="registration"
                    placeholder="i.e Jester@mail.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label>Full Name:</label>
                <input
                    class="registration"
                    placeholder="i.e Charles Jester"
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <label>Password:</label>
                <input
                    class="registration"
                    placeholder="i.e charlesIsCool1!"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <label>Experience in Months:</label>
                <input
                    class="registration"
                    placeholder="Enter 0-100"
                    onChange={(e) => setFormData({ ...formData, experienceMonths: e.target.value })}
                />
                <button onClick={register} on>
                    Register
                </button>
            </form>
            {wasPersisted === undefined ? <p></p> : <p>{wasPersisted}</p>}
        </>
    );
}
