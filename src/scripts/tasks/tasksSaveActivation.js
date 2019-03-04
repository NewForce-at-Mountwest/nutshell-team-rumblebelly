import apiRetrieve from "./tasksApiManager";
import taskList from "./tasksList";
import buildTaskObject from "./tasksObjectBuilder"

const activateSaveButton = () => {
    document.querySelector("#tasksContainer").addEventListener("click", () => {
        if(event.target.id === "save-task"){


            const nameVal = document.querySelector("#task-name").value;
            const dateVal = document.querySelector("#task-date").value;



            const objectToPost = buildTaskObject(nameVal, dateVal);


            apiRetrieve.postNewTask(objectToPost)
            .then(() => {

                taskList();


                document.querySelector("#task-name").value = "";
                document.querySelector("#task-date").value = "";

            })

        }

      })
  }

  export default activateSaveButton;