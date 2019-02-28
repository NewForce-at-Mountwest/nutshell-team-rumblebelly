import APIManager from "./EVeventsAPIManager"
import eventPrinter from "./EVeventPrinter"
import buildButton from "./EVbuttonBuilder"
// An event List component that displays all the database events in te Dom.


const EventList = () => {
    document.querySelector("#event-output").innerHTML = "";
    APIManager.getAllEvents()
    .then(events => {
        events.forEach(singleEvent => {
            document.querySelector("#event-output").innerHTML += eventPrinter(singleEvent);
        })

    },
    )
}

export default EventList;