// --@@@@ TASKS IMPORTS
import taskList from "./tasks/tasksList";
import buildForm from "./tasks/tasksForm";
import activateDeleteButton from "./tasks/tasksDeleteActivation";
import activateEditButton from "./tasks/tasksEditActivation";
import activateSaveButton from "./tasks/tasksSaveActivation";

//--@@@@@ EVENT IMPORTS
import EVformBuilder from "./EVENTS/EVformBuilder"
import APIManager from "./EVENTS/EVeventsAPIManager"
import EventPrinter from "./EVENTS/eventList"
import EVbuttonBuilder from "./EVENTS/EVbuttonBuilder"

//--@@@@ MESSENGER IMPORTS
import printAllMess from "./messages/printMess.js";


document.querySelector("#tasksFormContainer").innerHTML += buildForm();
taskList();
activateSaveButton();
activateEditButton();
activateDeleteButton();

//-- @@@ EVENT CALLS
EVformBuilder.buildEventForm()
APIManager.getAllEvents()
EventPrinter()
EVbuttonBuilder.activateEditButton()
EVbuttonBuilder.activateDeleteButton()
//--@@@@ MESSENGER CALLS
printAllMess();

// --@@@@ TASKS CALLS
document.querySelector("#tasksFormContainer").innerHTML += buildForm();
taskList();
activateSaveButton();
activateEditButton();
activateDeleteButton();

