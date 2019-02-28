import apiRetrieve from "./tasksApiManager"
import taskList from "./tasksList"

const activateDelete = () => {
    document.querySelector("#tasksContainer").addEventListener("click", () =>{
        if(event.target.classList.contains("delete")){
            const idToDelete = event.target.id.split("-")[1];
            apiRetrieve.deleteSingleTask(idToDelete)
            .then(taskList)
        }
    })
}

export default activateDelete;