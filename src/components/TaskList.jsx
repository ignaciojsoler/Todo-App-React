import React from "react";
import SingleTask from "../components/SingleTask";

const TaskList = ({
  taskState,
  taskCollection,
  setEditableMode,
  addNewTask,
  deleteTask,
  changeTaskState,
}) => {
  return (
    <div className="pb-5">
      {taskCollection.map((task, idx) => {
        return (
          <SingleTask
            key={idx}
            task={task}
            setEditableMode={setEditableMode}
            addNewTask={addNewTask}
            deleteTask={deleteTask}
            taskState={taskState}
            changeTaskState={changeTaskState}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
