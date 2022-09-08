import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { nabnakClient } from "../../common/remote/nabnak-client";
import { loginStore } from "./loginSlice";

export default function Login() {
    // Define state & hooks at the beginning
    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();

    const dispatch = useDispatch();

    const [loginStatus, setLoginStatus] = useState(); // use state default value is undefined

    // define functions
    async function login() {
        const body = { email: emailInput.current.value, password: passwordInput.current.value };

        try {
            const response = await nabnakClient.post("/auth", body);

            // Fetch LOWERCASES all Header Keys
            console.log(response.data);
            setLoginStatus(undefined);

            window.localStorage.setItem("token", response.headers.authorization);
            dispatch(loginStore(response.data));
            navigate("/card");
        } catch (error) {
            console.log(error.response.data);
            if (error.response.status === 404) {
                let loginFailed = `Email or Password was incorrect for email: ${body.email}`;
                setLoginStatus(loginFailed);
            }
        }
    }

    // Return
    return (
        <>
            <label>Email:</label>
            <input id="loginEmail" placeholder="i.e Jester@mail.com" ref={emailInput} />
            <label>Password:</label>
            <input id="loginPassword" type="password" placeholder="i.e charlesIsCool!" ref={passwordInput} />
            <button onClick={login}>Login</button>
            {loginStatus === undefined ? <p></p> : <p>{loginStatus}</p>}
        </>
    );
}
