const apiRetrieve = {
    postNewTask: newTask =>{
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });
    },
    // Why is the parenthesis blank when retrieving all of an object.
    retrieveAllTasks: () =>{
    return fetch("http://localhost:8088/tasks")
    // add this back once you have sign in integrated  to retrieveAllTasks  sessionStorage.getItem("userId"); ?userId=${activeUserId}
    .then (r =>r.json());
    },
    deleteSingleTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
    },
    retrieveSingleTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`)
        .then(r=>r.json());
    },
    editSingleTask: (taskId, taskObj) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        });
    }
    };

    export default apiRetrieve;
