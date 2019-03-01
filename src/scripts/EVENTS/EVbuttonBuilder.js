import APIManager from "./EVeventsAPIManager"
import EVformBuilder from "./EVformBuilder"
import EVObjectBuilder from "./EVObjectBuilder"
import eventPrinter from "./EVeventPrinter"
import eventList from "./eventList"

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
                            }}
                        )
                },
    activateEditButton: () => {
        document.querySelector("#event-output").addEventListener("click",()=>{
            if(event.target.classList.contains("edit")){
            APIManager.getSingleEvent(event.target.id.split("-")[1])
            console.log(event.target.id.split("-")[1])
            }
        })
    }
}

//     document.querySelector(`#editEvent-${}`).addEventListener("click", ()=> {
//     if(event.target.id === `#editEvent-${}`){
//     EVformBuilder.buildEditForm()
//     // IF EDIT FORM HAS DIFFERENT INPUT ID'S, WILL REQUIRE DIFFERENT SAVE BUTTON FUNCTION

//     renderSaveButton()
//     activateSaveButton()
//     }})
// },
//     activateDeleteButton: ()=>{
//         document.querySelector().addEventListener("click", ()=> {
//         if(event.target.id === "deleteEvent"){
//         APIManager.deleteEvent()
//             }
//         })
//     }
// }

export default buildButton