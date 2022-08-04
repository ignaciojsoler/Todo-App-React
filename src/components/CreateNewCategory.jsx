import React, { useState } from "react";
import { useNavigate } from "react-router";

const CreateNewCategory = ({ addNewCategory }) => {
  const navigate = useNavigate();
  const [newCategoryInput, setNewCategoryInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategoryInput.trim() !== "") {
      addNewCategory(
        newCategoryInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      );
      setNewCategoryInput("");
      navigate(
        `/${newCategoryInput
          .replaceAll(" ", "-")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")}`
      );
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          className=" py-5 px-8 font-medium rounded-2xl w-full focus:outline-none placeholder:font-medium"
          value={newCategoryInput}
          onChange={(e) => setNewCategoryInput(e.target.value)}
          placeholder={"+ Create new..."}
        />
      </form>
    </>
  );
};

export default CreateNewCategory;
