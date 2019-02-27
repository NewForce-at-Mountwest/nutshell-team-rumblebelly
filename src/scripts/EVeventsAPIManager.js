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
        return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
        })
    },
    getSingleEvent: (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`).then(XX=>XX.json())
    },
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