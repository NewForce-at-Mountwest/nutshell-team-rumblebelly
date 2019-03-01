import buildTaskObject from "./tasksObjectBuilder";
import apiRetrieve from "./tasksApiManager";
import taskList from "./tasksList";
import tasksForm from "./tasksForm";

const editedTask = () => {
    document.querySelector("#tasksContainer").addEventListener("click", () => {
        if (event.target.id.includes("#edit-btn")) {
            const nameVal = document.querySelector("#task-name").value;
            const dateVal = document.querySelector("#task-date").value;

            const taskId = event.target.id.split("-")[2];

            const objectToPost = buildTaskObject(nameVal, dateVal);

            apiRetrieve.editSingleTask(taskId, objectToPost)
            .then (()=> {
                taskList();
                document.querySelector("#tasksFormContainer").innerHTML = tasksForm();
            });

        }
    });
};

export default editedTask;