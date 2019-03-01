import buildSingleMessage from "./messComponent";

const apiMess = {
  //function to get all messages:
  getAllMess: () => {
    return fetch("http://localhost:8088/messages")
    .then(allMessages => allMessages.json());
  },

  //function to return a single message from db
  getSingleMess: () => {
    return fetch(`http//localhost:8088/messages?messageId=${message.id}`);
  },

  //function to post new message to api
  postNewMess: messObj => {
    return fetch("http://localhost:8088/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messObj)
    });
  },

  //function to save edited message
  editMess: () => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    });
  }
};

export default apiMess;
