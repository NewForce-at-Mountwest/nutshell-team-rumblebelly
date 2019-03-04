// Make sure to check and see if more than one saveButton ever generates, if so you need to change from id to class

const tasksButtons = {
    saveButton: () => {
        return "<button id=save-btn>Save</button>"
    },
    editButton: (tasksId) => {
        return `<button class=edit id=edit-btn-${tasksId}>Edit</button>`
    },
    deleteButton: (tasksId) => {
        return `<button class=delete id=delete-btn-${tasksId}>Delete</button>`
    }
}

export default tasksButtons;