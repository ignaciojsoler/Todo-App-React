import React, { useState } from "react";
import handleEnter from "../helpers/handleEnter";
import { PencilAltIcon, TrashIcon, CheckIcon } from "@heroicons/react/solid";
import Swal from 'sweetalert2'

const SingleTask = ({
  task,
  addNewTask,
  setEditableMode,
  deleteTask,
  taskState,
  changeTaskState,
}) => {
  const typesOfStates = ["To-Do", "Doing", "Completed"];

  const [newTaskTitle, setNewTaskTitle] = useState(task.taskTitle);
  const [newTaskDescription, setNewTaskDescription] = useState(
    task.taskDescription
  );
  const [newTaskState, setNewTaskState] = useState(taskState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim() !== "") {
      addNewTask(task.id, newTaskTitle, newTaskDescription, newTaskState);
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please add a title to the task',
        icon: 'error',
        iconColor: "#AB54DB",
        confirmButtonText: 'Ok'
      })
    }
    
  };

  return (
    <div className="mt-5 py-5 px-8 w-64 bg-white rounded-2xl shadow-md">
      {task.editable ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title..."
              className="focus:outline-none"
              autoFocus
              onKeyDown={handleEnter}
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <textarea
              rows="2"
              placeholder="Description..."
              className="mt-2 mb-4 focus:outline-none w-full resize-none"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            />
            <div className="flex justify-between">
            <select
              className=" text-gray"
              defaultValue={taskState}
              onChange={(e) => setNewTaskState(e.target.value)}
            >
              {typesOfStates.map((state, idx) => {
                return (
                  <option className="text-dark text-xs" key={idx} value={state}>
                    {state}
                  </option>
                );
              })}
            </select>

            <div className="flex justify-end space-x-2">
              <button onClick={handleSubmit} className=" p-1">
                <CheckIcon className="text-successActive h-6 " />
              </button>
              <button onClick={() => deleteTask(task.id)}>
                <TrashIcon className="text-danger h-6 hover:text-dangerActive" />
              </button>
            </div>
          </div>
          </form>
          
        </>
      ) : (
        <div className="flex flex-col">
          <h3 className="font-bold" onClick={() => setEditableMode(task.id)}>{task.taskTitle}</h3>
          <h3 className="mt-2 mb-4" onClick={() => setEditableMode(task.id)}>{task.taskDescription}</h3>


            <div className="flex justify-end space-x-2">
              <button onClick={() => setEditableMode(task.id)}>
                <PencilAltIcon className="text-success h-6 hover:text-successActive" />
              </button>
              <button onClick={() => deleteTask(task.id)}>
                <TrashIcon className="text-danger h-6 hover:text-dangerActive" />
              </button>
            </div>

        </div>
      )}
    </div>
  );
};

export default SingleTask;
