import taskList from "./tasks/tasksList";
import buildForm from "./tasks/tasksForm";
import activateDeleteButton from "./tasks/tasksDeleteActivation";
import activateEditButton from "./tasks/tasksEditActivation";
import activateSaveButton from "./tasks/tasksSaveActivation";
import EVformBuilder from "./EVENTS/EVformBuilder";
import APIManager from "./EVENTS/EVeventsAPIManager";
import EventPrinter from "./EVENTS/eventList";
import EVbuttonBuilder from "./EVENTS/EVbuttonBuilder";
import printAllMess from "./messages/printMess.js";


document.querySelector("#tasksFormContainer").innerHTML += buildForm();

activateSaveButton();

taskList();

    // activateDeleteButton();

    // activateEditButton()

EVformBuilder.buildEventForm();
APIManager.getAllEvents();
EventPrinter();
// EVbuttonBuilder.buildButton.activateEditButton();

EVbuttonBuilder.activateEditButton()
// EVbuttonBuilder.buildButton.activateEditButton()
printAllMess();
