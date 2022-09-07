import { useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { nabnakClient } from "../../common/remote/nabnak-client";
import CardTable from "./cardTable";

export default function CreateCard() {
    const [formData, setFormData] = useState({
        description: "",
        points: 3,
        tech: "",
        status: "",
    });

    async function newCard(e) {
        e.preventDefault();
        try {
            addAuthToken();
            await nabnakClient.post("/card", formData);
        } catch (error) {
            console.log(error);
        }
    }

    const formFunctions = {
        description: function (event) {
            setFormData({ ...formData, description: event.target.value });
        },
        points: function (event) {
            setFormData({ ...formData, points: event.target.value });
        },
        tech: function (event) {
            setFormData({ ...formData, tech: event.target.value });
        },
        status: function (event) {
            setFormData({ ...formData, status: event.target.value });
        },
    };

    return (
        <>
            <form>
                <label>Description:</label>
                <textarea class="card" placeholder="i.e Keep your sanity" onChange={formFunctions.description} />
                <br />
                <label>Points: {formData.points}</label>
                <input id="pointsInput" class="card" type="range" min="1" max="5" value={formData.points} onChange={formFunctions.points} />
                <br />

                <div>
                    <label>Tech:</label>
                    <input type="radio" id="techRadio1" name="tech" value="PYTHON" onChange={formFunctions.tech} />
                    <label>Python</label>
                    <input type="radio" id="techRadio2" name="tech" value="JAVA" onChange={formFunctions.tech} />
                    <label>Java</label>
                    <input type="radio" id="techRadio3" name="tech" value="JAVASCRIPT" onChange={formFunctions.tech} />
                    <label>JavaScript</label>
                </div>
                <div>
                    <label>Status:</label>
                    <input type="radio" id="statusRadio1" name="status" value="OPEN" onChange={formFunctions.status} />
                    <label>Open</label>
                    <input type="radio" id="statusRadio2" name="status" value="INPROGRESS" onChange={formFunctions.status} />
                    <label>In-Progress</label>
                    <input type="radio" id="statusRadio3" name="status" value="CLOSED" onChange={formFunctions.status} />
                    <label>Closed</label>
                </div>
                <input type="hidden" id="techSelect" class="card" value=""></input>
                <input type="hidden" id="statusSelect" class="card" value=""></input>

                <button onClick={newCard}>Create Card</button>
            </form>
            <CardTable></CardTable>
        </>
    );
}
