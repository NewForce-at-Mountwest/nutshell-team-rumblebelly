import renderWelcomeScreen from "./messages/test";

const loadWelcome = () => {
    document.querySelector("body").innerHTML = renderWelcomeScreen();
}

export default loadWelcome;