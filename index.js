function signUp() {
    console.log("ah");
    // window.location.replace("src/components/register/register.html");
    registerRender();
}

function options() {
    const options = ["1. Register as a member", "2. Create a Card", "3. Login", "4. Be awesome"];

    options.forEach((e) => (document.getElementById("options").innerHTML += "<li>" + e + "</li>"));
}

function homeMessage() {
    document.getElementById("content").innerHTML = ` <h1>Welcome to Nabnak! The future of Virtual Kanban Boards!!!</h1>
    <hr />
    <p id="story">
        Nabnak is all about the future of Kanban boards with the ability to go ahead register as a user and make as many cards as
        the heart desires making for a very simple experience for the user. It leverages a Spring Boot API backend that handles all
        HTTP request and response using RESTful web architecture. This is a bright future for kanban boards!
    </p>
    <br />
    <button onclick="signUp()">Sign up Today!!</button>
    <button onclick="trueStory()">Find out the Truth</button>
    <button onclick="options()">What options do you have?</button>

    <div id="options"></div>`;
}

function navRender() {
    document.getElementById("nav").innerHTML = `<script src="index.js"></script>
    <script src="src/components/newFrontpage/newfrontpage.js"></script>
    <script src="src/components/register/register.js"></script>
    <nav>
        <button class="navButton" onclick="window.location.replace('../../../index.html')">Home</button>
        <a href="../login/login.html"><button class="navButton">Login</button></a>
        <a href="../member/member.html"><button class="navButton">Member</button></a>
        <a href="../card/card.html"><button class="navButton">Card</button></a>
        <button class="navButton" onclick="render()">Change front page</button>
    </nav>`;
}
