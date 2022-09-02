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
    console.log(window.localStorage.getItem("token"));

    console.log({ description: description.value, points: points.value, tech: tech.value, status: status.value });

    // TODO IMPLEMENT API CALL TO PERSIST CARD
}
