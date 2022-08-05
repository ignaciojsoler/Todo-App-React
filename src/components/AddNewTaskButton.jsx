import React from "react";
import {XIcon} from '@heroicons/react/solid'

const AddNewTaskButton = ({ createNewTask, taskState }) => {
  return (
      <button
        className="text-4xl text-white bg-primary h-14 w-14 rounded-full flex justify-center items-center hover:text-purple-700 hover:bg-purple-400 active:bg-purple-700 active:text-white transition-colors duration-150"
        onClick={() => createNewTask(taskState)}
      >
      <XIcon className="h-7 rotate-45"/>
      </button>
  );
};

export default AddNewTaskButton;
