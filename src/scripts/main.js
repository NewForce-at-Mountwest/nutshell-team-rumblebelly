import EVformBuilder from "./EVENTS/EVformBuilder"
import APIManager from "./EVENTS/EVeventsAPIManager"
import EventPrinter from "./EVENTS/eventList"
import EVbuttonBuilder from "./EVENTS/EVbuttonBuilder"
import loadMessAPL from "./messages/printMess.js"
import apiMess from "./messages/apiMess.js"
import loadWelcome from "./messages/loadWelcome.js";
import printAllMess from "./messages/printMess.js";


EVformBuilder.buildEventForm()
APIManager.getAllEvents()
EventPrinter()
EVbuttonBuilder.activateEditButton()
// EVbuttonBuilder.buildButton.activateEditButton()
printAllMess();
