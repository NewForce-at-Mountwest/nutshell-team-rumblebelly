activateSaveButton = () => {
    document.querySelector("#tasksContainer").addEventListener("click", () => {
        if(event.target.id === "save-btn"){

            // Get the user's input
            const nameVal = document.querySelector("#contact-name").value;
            const phoneVal = document.querySelector("#contact-phone").value;
            const emailVal = document.querySelector("#contact-email").value;

            // Turn the user's input into an object
            const objectToPost = buildContactObject(nameVal, phoneVal, emailVal)

            // Save the object to our database
            ContactCollection.saveNewContact(objectToPost)
            .then(() => {
                // Once the POST is complete, print all the contacts again
                ContactList();

                // Clear the form values
                document.querySelector("#contact-name").value = "";
                document.querySelector("#contact-phone").value = "";
                document.querySelector("#contact-email").value = "";

            })

        }

      })
  }
};
}