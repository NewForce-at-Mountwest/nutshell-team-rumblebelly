import EVformBuilder from "./EVformBuilder"
import APIManager from "./EVeventsAPIManager"
import EventPrinter from "./eventList"
import EVbuttonBuilder from "./EVbuttonBuilder"

EVformBuilder.buildEventForm()
APIManager.getAllEvents()
EventPrinter()
EVbuttonBuilder.buildButton.activateEditButton()