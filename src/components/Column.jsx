import React, { useState } from "react";
import AddNewTaskButton from "./AddNewTaskButton";
import TaskList from "./TaskList";

const Column = ({
  taskState,
  createNewTask,
  addNewTask,
  setEditableMode,
  deleteTask,
  taskCollection,
  changeTaskState,
}) => {
  return (
    <div className="mr-8">
      <div className="flex justify-between items-center w-64">
        <h3 className="text-xl font-medium">{taskState}</h3>
        <AddNewTaskButton createNewTask={createNewTask} taskState={taskState} />
      </div>
      <TaskList
        taskCollection={taskCollection}
        setEditableMode={setEditableMode}
        addNewTask={addNewTask}
        deleteTask={deleteTask}
        taskState={taskState}
        changeTaskState={changeTaskState}
      />
    </div>
  );
};

export default Column;
