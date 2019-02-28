import taskList from "./tasks/tasksList";
import buildForm from "./tasks/tasksForm";
import activateDeleteButton from "./tasks/tasksDeleteActivation";
import activateEditButton from "./tasks/tasksEditActivation";
import activateSaveButton from "./tasks/tasksSaveActivation";


document.querySelector("#tasksContainer").innerHTML += buildForm();

activateSaveButton();

taskList();

    // activateDeleteButton();

    // activateEditButton()
