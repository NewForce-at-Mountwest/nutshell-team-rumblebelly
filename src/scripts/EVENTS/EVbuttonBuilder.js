import APIManager from "./EVeventsAPIManager"
import EVformBuilder from "./EVformBuilder"
import EVObjectBuilder from "./EVObjectBuilder"
import eventPrinter from "./EVeventPrinter"
import eventList from "./eventList"
import editSaver from "./EVeditSaver"

// document.queryselector needs to be filled out in the functions
const buildButton = {
    renderAddEventButton: () => {
        return `<button id="addEvent">Add Event</button>`;
    },
    activateAddEventButton: () => {
        document.querySelector().addEventListener("click", () => {
            if (event.target.id === "addEvent") {
                EVformBuilder.buildEventForm()
            }
        })
    },
    renderSaveButton: () => {
        document.querySelector("#event-form").innerHTML +=
            `<button id="saveEvent">Save Event</button>`;
    },
    activateSaveButton: () => {
        document.querySelector("#eventsContainer").addEventListener("click", () => {

            if (event.target.id === "saveEvent") {
                document.querySelector("#event-output").innerHTML = "";
                const nameVal = document.querySelector("#event-name").value;
                const dateVal = document.querySelector("#event-date").value;
                const locationVal = document.querySelector("#event-location").value;

                const objectToPost = EVObjectBuilder(nameVal, dateVal, locationVal);

                APIManager.addNewEvent(objectToPost)
                    .then(() => {
                        eventList();
                    })
            }
        }
        )
    },
    activateEditButton: () => {
        document.querySelector("#event-output").addEventListener("click", () => {
            if (event.target.classList.contains("edit")) {
                APIManager.getSingleEvent(event.target.id.split("-")[1])
                    .then((singleEvent) => {
                        document.querySelector("#event-name").value = singleEvent.event;
                        document.querySelector("#event-date").value = singleEvent.date;
                        document.querySelector("#event-location").value = singleEvent.location;

                        document.querySelector("#saveEvent").textContent = "Edit Event";
                        document.querySelector("#saveEvent").id = `editEvent-${singleEvent.id}`;
                        console.log(singleEvent)

                        editSaver()
                    })
            }
        })
    },
    activateDeleteButton: () => {
        document.querySelector("#event-output").addEventListener("click", () => {
            if (event.target.classList.contains("delete")){
                console.log(event.target.classList)
                const idToDelete = event.target.id.split("-")[1];
                APIManager.deleteEvent(idToDelete)
                .then(eventList)
            }
        }
        )
    }
}

export default buildButton