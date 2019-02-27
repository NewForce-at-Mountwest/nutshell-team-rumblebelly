const tasksButtons = {
    saveButton: () => {
        return `<button id=save-btn>Save</button>`
    },
    editButton: (tasksId) => {
        return `<button id=edit-btn-${tasksId}>Edit</button>`
    },
    deleteButton: (tasksId) => {
        return `<button id=delete-btn-${tasksId}>Delete</button>`
    }
}

export default tasksButtons;