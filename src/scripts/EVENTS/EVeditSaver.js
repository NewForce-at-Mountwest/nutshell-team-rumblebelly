
// this function should save the edited contact??? and it should be ran in the
// button builder js file
import formBuilder from "./EVformBuilder"
import objectBuilder from "./EVObjectBuilder"
import EVapiManager from "./EVeventsAPIManager"
import eventList from "./eventList"

const handleEditedEvent = () => {
    document.querySelector("#eventform-output").addEventListener("click", () => {
        if (event.target.id.includes("editEvent")) {
            console.log(event.target.id)
            const nameVal = document.querySelector("#event-name").value;
            const dateVal = document.querySelector("#event-date").value;
            const locationVal = document.querySelector("#event-location").value;

            const contactId = event.target.id.split("-")[1];
            console.log(contactId)

            const objectToPost = objectBuilder(nameVal, dateVal, locationVal);

            EVapiManager.editEvent(contactId, objectToPost).then(() => {
                eventList();
               formBuilder.buildEventForm();
            }
    )
}

  });
};

export default handleEditedEvent;