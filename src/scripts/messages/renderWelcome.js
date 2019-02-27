
const renderWelcomeScreen= () => {

return `
<div id="welcomeContainer">
<h1> Welcome to Nutshell!</h1>
<p> Your one-stop dashboard to organize daily tasks, events, news article, friends, and chat messages (maybe).</p>


<h3>Already a member? login here: </h3>
<button id="login-btn">Login</button>

<h3>Interested in joining? register here:</h3>
<button id="register-btn">Register</button>
</div>
`
}

// activateLoginBtn: () => {
//     document.querySelector("#login-btn").addEventListener("click", () => {

//     })
// },

// activateRegisterBtn: () => {
//     document.querySelector("#register-btn").addEventListener("click", () => {

//     })
// }

export default renderWelcomeScreen;