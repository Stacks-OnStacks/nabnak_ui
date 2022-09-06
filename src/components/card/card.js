const url = "http://localhost:8080";

function pointsValue() {
    document.getElementById("pointsValue").innerHTML = document.getElementById("pointsInput").value;
}

function techValue() {
    let status = document.getElementsByName("tech");

    for (const radio of status) {
        if (radio.checked) document.getElementById("techSelect").value = radio.value;
    }

    console.log(document.getElementById("techSelect").value);
}

function statusValue() {
    let status = document.getElementsByName("status");

    for (const radio of status) {
        if (radio.checked) document.getElementById("statusSelect").value = radio.value;
    }

    console.log(document.getElementById("statusSelect").value);
}

async function newCard() {
    const [description, points, tech, status] = document.getElementsByClassName("card");

    const body = JSON.stringify({ description: description.value, points: points.value, tech: tech.value, status: status.value });

    // TODO IMPLEMENT API CALL TO PERSIST CARD

    try {
        // whenever there is a Promise there is a wait...tehe :D
        // const response = await fetch("http://localhost:8080/card", { // not using template literal, which will allow us to change urls quickly across multiple calls
        const response = await fetch(`${url}/card`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: window.localStorage.getItem("token"),
            },
            body: body,
        });
        const card = await response.json();
        console.log(card);
    } catch (error) {
        console.log(error);
        document.getElementById("cardResponse").innerHTML = "Error Occured, not logged in";
        window.location.replace("../login/login.html");
        alert("Must log in");
    }
}
