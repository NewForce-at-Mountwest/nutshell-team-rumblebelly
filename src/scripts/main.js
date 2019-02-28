import loadMessAPL from "./messages/printMess.js"
import apiMess from "./messages/apiMess.js"
import loadWelcome from "./messages/loadWelcome.js";
import printAllMess from "./messages/printMess.js";
import EVformBuilder from "./EVformBuilder"
import APIManager from "./EVeventsAPIManager"
import EventPrinter from "./eventList"
import EVbuttonBuilder from "./EVbuttonBuilder"

EVformBuilder.buildEventForm()
APIManager.getAllEvents()
EventPrinter()
EVbuttonBuilder.buildButton.activateEditButton()
printAllMess();
