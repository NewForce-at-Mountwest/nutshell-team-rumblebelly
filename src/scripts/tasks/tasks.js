// *********Need to add checkbox to singleTaskObj
import tasksButtons from "./tasksButtons";

const task = (singleTaskObj) => {
    return `<div class="card" id="contact-card">
    <h3>${singleTaskObj.name}</h3>
    <p>${singleTaskObj.dueDate}</p>
    ${tasksButtons.editButton(singleTaskObj.id)}
    </div>`
 }

 export default task;