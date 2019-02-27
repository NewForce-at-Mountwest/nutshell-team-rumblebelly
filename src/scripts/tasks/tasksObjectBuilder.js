// Builds object to put into JSON

const buildTaskObject = (nameParam, dateParam, completedParam) => {
    return {
        name: nameParam,
        dueDate: dateParam,
        completed: completedParam,
        userId: sessionStorage.getItem("userId")
    };
};

export default buildTaskObject;