import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Dashboard from "../components/Dashboard";
import { Routes, Route, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();

  let storedCategories = JSON.parse(localStorage.getItem("storedCategories"));

  if (!storedCategories) {
    storedCategories = [{ categoryName: "Home" }, { categoryName: "Work" }];
  }

  const [categoriesList, setCategoriesList] = useState(storedCategories);

  const addNewCategory = (newCategoryName) => {
    let newCategory = {
      categoryName: newCategoryName,
    };
    const alreadyExists = categoriesList.some((category) => {
      if (
        category.categoryName.toLowerCase() === newCategoryName.toLowerCase()
      ) {
        return true;
      } else {
        return false;
      }
    });

    !alreadyExists
      ? setCategoriesList([...categoriesList, newCategory])
      : Swal.fire({
        title: "Oops!",
        text: "It seems that category already exists",
        icon: "warning",
        confirmButtonColor: "#AB54DB",
        showConfirmButton: false,
        iconColor: "#AB54DB",
        timer: 2000
      });
  };

  const deleteAllCategories = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonColor: "#AB54DB",
      cancelButtonColor: "#fff",
      confirmButtonText: "Yes, delete all",
      iconColor: "#AB54DB",
      customClass: { cancelButton: 'swalBtnColor' }
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        setCategoriesList([{ categoryName: "Home" }]);
        navigate("/Home")
        //Reload is not the best option but works for now
        location.reload()
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("storedCategories", JSON.stringify(categoriesList));
  }, [categoriesList]);

  return (
    <div className=" m-auto max-w-7xl overflow-hidden">
      <Categories
        categoriesList={categoriesList}
        addNewCategory={addNewCategory}
        deleteAllCategories={deleteAllCategories}
      />

      {/*Create a new Dashboard for each category added */}
      <Routes>
        {categoriesList.map((category, idx) => {
          return (
            <Route
              key={idx}
              path={`/${category.categoryName.replaceAll(" ", "-")}`}
              element={
                <Dashboard key={idx} categoryName={category.categoryName} />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Home;
