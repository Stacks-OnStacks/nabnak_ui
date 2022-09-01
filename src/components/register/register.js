function register() {
    let [email, fullName, password, experienceMonths] = document.getElementsByClassName("registration");
    console.log(email.value, fullName.value, password.value, experienceMonths.value);

    if (email.value === "" || fullName.value === "" || password.value === "") {
        document.getElementById(
            "invalid"
        ).innerHTML = `One of the followin was not entered Email: ${email.value} FullName: ${fullName.value} Password: ${password.value}`;
        return;
    }
    if (experienceMonths.value === "" || experienceMonths.value < 0 || experienceMonths.value > 100) {
        document.getElementById("invalid").innerHTML = `Please enter a range of 0-100, you ented ${experienceMonths.value}`;
        return;
    }
    const newMember = {
        email: email.value,
        fullName: fullName.value,
        password: password.value,
        experienceMonths: experienceMonths.value,
    };

    console.log(JSON.stringify(newMember));
}

function registerRender() {
    document.getElementById("content").innerHTML = `
<label>Email:</label>
<input class="registration" placeholder="i.e Jester@mail.com" />
<label>Full Name:</label>
<input class="registration" placeholder="i.e Charles Jester" />
<label>Password:</label>
<input class="registration" placeholder="i.e charlesIsCool1!" />
<label>Experience in Months:</label>
<input class="registration" placeholder="Enter 0-100" />
<button onclick="register()">Register</button>
<p id="invalid"></p>`;
}
