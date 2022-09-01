function signUp() {
    console.log("ah");
    window.location.replace("src/components/register/register.html");
}

function trueStory() {
    document.getElementById("story").innerHTML = "True story this isn't the future of kanban boards, it's tooo basic";
}

function options() {
    const options = ["1. Register as a member", "2. Create a Card", "3. Login", "4. Be awesome"];

    options.forEach((e) => (document.getElementById("options").innerHTML += "<li>" + e + "</li>"));
}
