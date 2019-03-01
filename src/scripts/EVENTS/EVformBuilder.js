import buildButton from "./EVbuttonBuilder"

const EventForm = {
    buildEventForm: ()=> {
        document.querySelector("#eventform-output").innerHTML =
        `
        <div class="form" id="event-form">
            <h3>Add a New Event</h3>
            <form action="">
            <input type="text" id="event-name" placeholder="Name">
            <input type="date" id="event-date">
            <input type="text" id="event-location" placeholder="Location">
        </div>`
    buildButton.renderSaveButton()
    buildButton.activateSaveButton()

    }
}

export default EventForm