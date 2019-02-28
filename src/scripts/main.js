import EVformBuilder from "./EVENTS/EVformBuilder"
import APIManager from "./EVENTS/EVeventsAPIManager"
import EventPrinter from "./EVENTS/eventList"
import EVbuttonBuilder from "./EVENTS/EVbuttonBuilder"

EVformBuilder.buildEventForm()
APIManager.getAllEvents()
EventPrinter()
EVbuttonBuilder.buildButton.activateEditButton()