import apiMess from "./apiMess.js";
import messageInput from "./message.js";
import messComponent from "./messComponent.js";
import sendtheMess from "./clickMess.js";

//this module loads message history and new message input
// const loadMessAPL = () => {
//     document.querySelector("#upperMess").innerHTML = "";
//     apiMess.getAllMess()
//     .then(messages => messages.json)
//     .then(messages => {
//         messages.forEach(singleMessage => {
//             document.querySelector("#upperMess").innerHTML += buildSingleMessage(singleMessage);
//     document.querySelector("#lowerMess").innerHTML = messageInput()
//     });
//     });
// };

const printAllMess = () => {
  apiMess.getAllMess().then(parsedMess => {
    parsedMess.forEach(singleMess => {
      document.querySelector("#upperMess").innerHTML += messComponent(
        singleMess
      );
      document.querySelector("#lowerMess").innerHTML = messageInput()
      sendtheMess();

    });
  });
};

export default printAllMess;
