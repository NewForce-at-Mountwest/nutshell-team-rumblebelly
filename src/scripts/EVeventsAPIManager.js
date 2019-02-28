const eventCollection = {
    addNewEvent: eventObj => {
            return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
    },
    getAllEvents: () => {
        const activeUserId = sessionStorage.getItem("userId");
        return fetch(`http://localhost:8088/events?=${activeUserId}`).then(XX => XX.json());
    },
    deleteEvent: (eventId) => {
        // THIS FUNCTION NEEDS TO TARGET THE DATABASE
        return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
        })
    },
    getSingleEvent: (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`).then(XX=>XX.json())
    },
    // we are going to call this function upon click the save edit button, passing in the Id of the event being editted and an object composed of the values in the input fields of the edit forms.
    editEvent: (eventId, eventObj) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObj)
        })
    }
};

export default eventCollection;