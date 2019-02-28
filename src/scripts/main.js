import taskList from "./tasks/tasksList";
import buildForm from "./tasks/tasksForm";
import activateDeleteButton from "./tasks/tasksDeleteActivation";
import activateEditButton from "./tasks/tasksEditActivation";
import activateSaveButton from "./tasks/tasksSaveActivation";
import EVformBuilder from "./EVformBuilder";
import APIManager from "./EVeventsAPIManager";
import EventPrinter from "./eventList";
import EVbuttonBuilder from "./EVbuttonBuilder";


document.querySelector("#tasksContainer").innerHTML += buildForm();

activateSaveButton();

taskList();

    // activateDeleteButton();

    // activateEditButton()

    EVformBuilder.buildEventForm();
APIManager.getAllEvents();
EventPrinter();
EVbuttonBuilder.buildButton.activateEditButton();
