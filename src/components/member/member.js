// CHANGE HARD CODED TO API CALL - findById
const testingMember = {
    memberId: "b6dca03f-6090-4930-9a74-dffbb7b9ab38",
    fullName: "Data Beaver",
    email: "dbIDE@mail.com",
    experienceMonths: 10000,
};

let url = "http://localhost:8080";
// let url = "http://aws.nabnak.com"
function showTest() {
    let html_code = "<tr>";
    for (const key in testingMember) {
        html_code += "<td>" + testingMember[key] + "</td>";
    }
    html_code += "</tr>";
    document.getElementById("memberTable").innerHTML = html_code;
}

async function findAll() {
    try {
        const response = await fetch(`${url}/member`);
        const members = await response.json();
        formatMultiTable(members);
    } catch (error) {
        console.error(error);
    }
    // template liters
    // testingMembers.forEach(
    //     (e) => (html_code += `<td>${e.memberId}</td><td>${e.fullName}</td><td>${e.email}</td><td>${e.experienceMonths}</td></tr>`)
    // );

    // THE OLD SCHOOL WAY

    // // Ready State 0
    // let request = new XMLHttpRequest(); // This was from AJAX (Asynchronous JS & XML)

    // // Ready State 1, where we've called the request to the server
    // request.open("GET", `${url}/member`, true);

    // // RS 2 (RS3 happens as the response is being returned (partial response incase of failure))
    // request.send();
    // // Ready State 4 when it is done
    // request.onreadystatechange = () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         let members = JSON.parse(request.responseText); // this contains all information inside of the body
    //          formatMultiTable(members);

    // Fetch - then syntax first and catch
    // fetch(`${url}/member`)
    //     .then((response) => response.json())
    //     .then((member) => formatMultiTable(member))
    //     .catch((error) => {
    //         console.error(error);
    //     });

    // Aysnc Await ECMAScript 6 (JS 6) around 2016
}

function formatMultiTable(members) {
    let html_code = "<tr>";
    const letsSee = members.map((e) => {
        for (const key in e) {
            html_code += `<td>${e[key]}</td>`;
        }
        html_code += "</tr>";
        return html_code;
    });
    console.log(letsSee);
    document.getElementById("memberTable").innerHTML = html_code;
}
