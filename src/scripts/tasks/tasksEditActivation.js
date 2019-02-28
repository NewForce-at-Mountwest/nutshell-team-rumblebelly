import apiRetrieve from "./tasksApiManager";
import editedTask from "./tasksSaveEdit";

const activateEdit = () => {
    document.querySelector("#tasksContainer").addEventListener("click", () => {
        if(event.target.classList.contains("edit")){
            console.log("You clicked edit!");
            apiRetrieve.retrieveSingleTask(event.target.id.split("-")[2])
            .then ((singleTask) =>{
                document.querySelector("#task-name").value = singleTask.name;
                document.querySelector("#task-date").value = singleTask.date;

                document.querySelector("#save-task").textContent = "Edit Task";
                document.querySelector("#save-task").id = `edit-task-${singleTask.id}`;

                editedTask();

            })
        }
    })
}

export default activateEdit;