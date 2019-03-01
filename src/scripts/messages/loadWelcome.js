import renderWelcomeScreen from "./renderWelcome";

const loadWelcome = () => {
    document.querySelector("body").innerHTML = renderWelcomeScreen();
}

export default loadWelcome;