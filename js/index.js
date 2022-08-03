//  Hnadling Blank or Empty Input with showing alert
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter task first!");
    }
    // Adding input task in main container
    else {
        document.querySelector('#task').innerHTML +=
            `
            <div class="task" >
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete"><i class="uil uil-trash-alt"></i></button>
            </div>
            `;

            // for deleting task
        var current_tasks = document.querySelectorAll(".delete");

        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        // for check and uncheck(line on task) added task
        var tasks = document.querySelectorAll('.task');
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }

        // clearing input after task entry
        document.querySelector('#newtask input').value ="";

    }


}

