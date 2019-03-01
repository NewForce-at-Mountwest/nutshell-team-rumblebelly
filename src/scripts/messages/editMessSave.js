import apiMess from "./apiMess";

const handleEditedMess = () => {
  document.querySelector("#upperMess").addEventListener("click", () => {
    if (event.target.id.includes("edit")) {
      const messVal = document.querySelector(`#edit-${singleMess.id}`).value;
      const messToPost = buildMessObj(messVal);
      apiMess.editMess(messToPost).then(() => {
        apiMess.getAllMess();
      });
    }
  });
};

export default handleEditedMess;
