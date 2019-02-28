import apiMess from "./apiMess";
import buildMessObj from "./buildMessObj";

const sendtheMess = () => {
document.querySelector("#messageText").addEventListener("keyup", function(event){

    if (event.keyCode===13) {
        event.preventDefault();
        const messVal = document.querySelector("#messageText").value;
        const messToPost = buildMessObj(messVal)

        apiMess.postNewMess(messToPost)
        .then(() => {
            apiMess.getAllMess();


            document.querySelector("#messageText").value = "";
        })
    }
})
}

export default sendtheMess;