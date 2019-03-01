//--@@@@@ EVENT IMPORTS
import EVformBuilder from "./EVENTS/EVformBuilder"
import APIManager from "./EVENTS/EVeventsAPIManager"
import EventPrinter from "./EVENTS/eventList"
import EVbuttonBuilder from "./EVENTS/EVbuttonBuilder"

//--@@@@ MESSENGER IMPORTS
import loadMessAPL from "./messages/printMess.js"
import apiMess from "./messages/apiMess.js"
import loadWelcome from "./messages/loadWelcome.js";
import printAllMess from "./messages/printMess.js";

//-- @@@ EVENT CALLS
EVformBuilder.buildEventForm()
APIManager.getAllEvents()
EventPrinter()
EVbuttonBuilder.activateEditButton()
EVbuttonBuilder.activateDeleteButton()
//--@@@@ MESSENGER CALLS
printAllMess();
