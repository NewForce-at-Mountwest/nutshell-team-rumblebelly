import apiMess from "./apiMess";
import buildMessObj from "./buildMessObj";
import printAllMess from "./printMess";

const sendtheMess = () => {
document.querySelector("#messageText").addEventListener("keyup", function(event){
    // debugger;
    if (event.keyCode===13) {
        event.preventDefault();
        const messVal = document.querySelector("#messageText").value;
        const messToPost = buildMessObj(messVal)

        apiMess.postNewMess(messToPost)
        .then(() => {

            (document.querySelector("#upperMess").innerHTML = "")
            printAllMess();
            document.querySelector("#messageText").value = "";
        })
    }

})
}

export default sendtheMess;