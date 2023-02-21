import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task("Example", "Default Description", false, LEVELS.normal);

/*     const changeState = (id) =>{
        console.log("ToDo: Cambiar estado de una tarea")
    } */

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            <TaskComponent task={defaultTask}/>
        </div>
    );
};


export default TaskListComponent;
