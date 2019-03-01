import apiMess from "./apiMess";

const activateEditBtn = () => {
  document.querySelector("#upperMess").addEventListener("click", () => {
    if (event.target.classList.contains("edit")) {
      apiMess
        .getSingleMess(event.target.id.split("-")[1])
        .then(singleMessage => {
          document.querySelector(`#edit-${singleMessage.id}`).value = singlemessage.message;
          document.querySelector(`#edit-${singleMessage.id}`).id = singleMessage.id;
        });
    }
  });
};

export default activateEditBtn;