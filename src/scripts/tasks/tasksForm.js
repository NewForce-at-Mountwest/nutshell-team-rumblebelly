buildForm = () =>{
        return `<div class="form" id="task-form">
        <h3>New Task</h3>
        <form action="">
          <input type="text"  id="task-name" placeholder="Name">
          <input type="text"  id="task-date" placeholder="Date">
        </form>
         <button id="save-task">Save Task</button>
      </div>`;
    }




export default buildForm;