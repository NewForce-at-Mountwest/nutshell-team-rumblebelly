import task from "./tasks";
import retrieval from "./tasksApiManager";

const taskList = () => {
    document.querySelector("#tasksOutputContainer").innerHTML ="";
    retrieval.retrieveAllTasks()
    .then(tasks =>{
        tasks.forEach(singleContact => {
            document.querySelector("#tasksOutputContainer").innerHTML += task(singleContact);
        })
    })
}

export default taskList;