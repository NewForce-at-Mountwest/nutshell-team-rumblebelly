import APIManager from "./EVeventsAPIManager"
import EVformBuilder from "./EVformBuilder"
import EVObjectBuilder from "./EVObjectBuilder"
// document.queryselector needs to be filled out in the functions
const buildButton = {
    renderAddEventButton: () => {
        return `<button id="addEvent">Add Event</button>`;
    },
    activateAddEventButton: ()=> {
        document.querySelector().addEventListener("click",()=> {
        if(event.target.id === "addEvent"){
        EVformBuilder.buildEventForm()
    }})
    },
    renderSaveButton: () => {
        document.querySelector("#event-form").innerHTML +=
        `<button id="saveEvent">Save Event</button>`;
    },
    activateSaveButton: ()=> {
        document.querySelector("#eventsContainer").addEventListener("click", ()=> {
        if(event.target.id === "saveEvent"){
        const nameVal = document.querySelector("#event-name").value;
        const dateVal = document.querySelector("#event-date").value;
        const locationVal = document.querySelector("#event-location").value;

        const objectToPost = EVObjectBuilder(nameVal, dateVal, locationVal);
        APIManager.addNewEvent(objectToPost);
        APIManager.getAllEvents();
        //PRINT TO THE DOM FUNCTION
    }})
    },
    renderEditButton: () => {
        return `<button id="editEvent-${eventId}">Edit Event</button>`;
    },
    activateEditButton: ()=>{
        document.querySelector("#edit-form").addEventListener("click", ()=> {
        if(event.target.id === "editEvent"){
        EVformBuilder.buildEditForm()
        // IF EDIT FORM HAS DIFFERENT INPUT ID'S, WILL REQUIRE DIFFERENT SAVE BUTTON FUNCTION

        renderSaveButton()
        activateSaveButton()
        }})
    },
    renderDeleteButton: () => {
        return `<button id="deleteEvent">Delete Event</button>`;
    },
    activateDeleteButton: ()=>{
        document.querySelector().addEventListener("click", ()=> {
        if(event.target.id === "deleteEvent"){
        APIManager.deleteEvent()
            }
        })
    }
}

export default buildButton