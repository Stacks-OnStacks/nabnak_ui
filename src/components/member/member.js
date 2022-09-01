const testingMember = {
    memberId: "b6dca03f-6090-4930-9a74-dffbb7b9ab38",
    fullName: "Data Beaver",
    email: "dbIDE@mail.com",
    experienceMonths: 10000,
};

function showTest() {
    let html_code = "<tr>";
    for (const key in testingMember) {
        html_code += "<td>" + testingMember[key] + "</td>";
    }
    html_code += "</tr>";
    document.getElementById("memberTable").innerHTML = html_code;
}

function showMultiTest() {
    let html_code = "<tr>";

    // template liters
    // testingMembers.forEach(
    //     (e) => (html_code += `<td>${e.memberId}</td><td>${e.fullName}</td><td>${e.email}</td><td>${e.experienceMonths}</td></tr>`)
    // );

    const letsSee = testingMembers.map((e) => {
        for (const key in e) {
            html_code += `<td>${e[key]}</td>`;
        }
        html_code += "</tr>";
        return html_code;
    });
    console.log(letsSee);
    document.getElementById("memberTable").innerHTML = html_code;
}

const testingMembers = [
    {
        memberId: "8048d36c-0db5-49eb-b097-307b23d3650f",
        fullName: "Jeff Jordan",
        email: "ne@mail.com",
        experienceMonths: 2400,
    },
    {
        memberId: "81f0b8ca-aa31-4087-b47c-3536436d32cd",
        fullName: "Kim Dang",
        email: "kd@mail.com",
        experienceMonths: 480,
    },
    {
        memberId: "459498ab-de03-436a-9f12-5ee24cd3fcff",
        fullName: "John Fortnite",
        email: "jf@mail.com",
        experienceMonths: 420,
    },
    {
        memberId: "6fd15282-767d-4510-8892-9049a62adbe9",
        fullName: "Dave Bender",
        email: "db@mail.com",
        experienceMonths: 0,
    },
    {
        memberId: "869a4fd5-35de-4b9c-b5c3-af9fba86a92a",
        fullName: "Chocolate Meltyson",
        email: "cm@mail.com",
        experienceMonths: 9001,
    },
    {
        memberId: "cc4f57ef-1e87-4335-b6b7-86f7f72ceb72",
        fullName: "Next Time",
        email: "dbz@mail.com",
        experienceMonths: 10000,
    },
    {
        memberId: "88efbefd-9edc-41be-87cb-e9aedd64e433",
        fullName: "The Bean Gobbler",
        email: "beans@mail.com",
        experienceMonths: 420,
    },
    {
        memberId: "d40d050c-4d89-48fd-8e28-535e2a89dd42",
        fullName: "The REAL CJ",
        email: "cj1@mail.com",
        experienceMonths: 9001,
    },
    {
        memberId: "6d0e3a4a-13e3-49d7-bcda-81b0a42a3649",
        fullName: "Snoop Dogg",
        email: "sd@mail.com",
        experienceMonths: 10000000,
    },
    {
        memberId: "00a41f97-35ba-429e-8f00-1d75220b9c79",
        fullName: "The wicked witch of the west",
        email: "www@mail.com",
        experienceMonths: 101,
    },
    {
        memberId: "cd6c6021-9bab-4242-97ca-07b1e7b5196a",
        fullName: "Caleb Beck",
        email: "cb@mail.com",
        experienceMonths: 50,
    },
    {
        memberId: "dacdf7c5-fdce-44fc-a553-a203e95940cc",
        fullName: "OJ Simpson",
        email: "ididntdoit@mail.com",
        experienceMonths: 0,
    },
    {
        memberId: "34d0ffe9-05f3-4bd8-a21d-796dc2a6feb6",
        fullName: "The third musketeer",
        email: "not_the_chocolate_kind@mail.com",
        experienceMonths: 50,
    },
    {
        memberId: "eb3b1591-7d2b-42dd-9ca3-4f021444d0fc",
        fullName: "John Cena",
        email: "jc@mail.com",
        experienceMonths: 1,
    },
    {
        memberId: "88daf28e-3dd8-40bf-98c9-b5ff99b0791e",
        fullName: "Paul Mork",
        email: "pm@mail.com",
        experienceMonths: 6,
    },
    {
        memberId: "b3af5dc1-c080-49f4-b19d-49de22653daf",
        fullName: "Tanner Stanley",
        email: "ts@mail.com",
        experienceMonths: 8,
    },
    {
        memberId: "b6dca03f-6090-4930-9a74-dffbb7b9ab38",
        fullName: "Data Beaver",
        email: "dbIDE@mail.com",
        experienceMonths: 10000,
    },
    {
        memberId: "d24fb1ee-fa10-4422-abcf-854212c6c3ad",
        fullName: "Intelli J",
        email: "ij@mail.com",
        experienceMonths: 100000,
    },
    {
        memberId: "d15ab834-985b-4905-abd0-1bc42fe733d9",
        fullName: "Joe Validation",
        email: "joe@mail.com",
        experienceMonths: 100000,
    },
    {
        memberId: "db7665b3-f411-4afc-b6b5-5e606505d16e",
        fullName: "Jeffrey Jordan",
        email: "jj@mail.com",
        experienceMonths: 2400,
    },
];
