const event = (singleEventObj) => {
    return `<div class="card" id="event-card">
    <h3>${singleEventObj.event}</h3>
    <p>${singleEventObj.date}</p>
    <p>${singleEventObj.location}</p>
    <button class="delete" id="deleteEvent-${singleEventObj.id}">Delete</button>
    <button class="edit" id="editEvent-${singleEventObj.id}">Edit</button>
 </div>`
 }

 export default event