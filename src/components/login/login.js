const url = "http://localhost:8080";

async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // TODO: FINISH LOGIN CALL TO API
    const body = JSON.stringify({ email: email, password: password });

    try {
        const response = await fetch(`${url}/auth`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: body,
        });
        console.log(response);
        if (response.status === 404) {
            document.getElementById("failedLogIn").innerHTML = "Information provided was incorrect, please try again.";
        } else {
            document.getElementById("failedLogIn").innerHTML = "Successfully Logged In";
        }

        // Fetch LOWERCASES all Header Keys
        console.log(response.headers.get("authorization"));

        window.localStorage.setItem("token", response.headers.get("authorization"));
    } catch (error) {
        console.log(error);
    }
}
