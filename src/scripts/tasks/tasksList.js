import task from "./tasks";
import retrieval from "./tasksApiManager";

const taskList = () => {
    document.querySelector("#tasksContainer").innerHTML="";
    retrieval.retrieveAllTasks()
    .then(tasks =>{
        tasks.forEach(singleContact => {
            document.querySelector("#tasksContainer").innerHTML += task(singleContact);
        })
    })
}

export default taskList;