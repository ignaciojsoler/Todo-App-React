import React, { useState, useEffect} from "react";
import CreateNewCategory from "./CreateNewCategory";
import LogOut from "./LogOut";
import { Link, useLocation } from "react-router-dom";
import {MenuIcon} from '@heroicons/react/solid'


const Categories = ({ categoriesList, addNewCategory, deleteAllCategories }) => {

  const [slideNav, setSlideNav] = useState(false)
  const sampleLocation = useLocation().pathname.slice(1)

  return (
    <div className=" relative">
      <div className={`${slideNav && 'hidden'} fixed z-50  w-full bg-primary h-16 shadow-xl flex items-center sm:hidden`}>
      <button onClick={() => setSlideNav(!slideNav)} 
      className="absolute  my-5 ml-6 sm:hidden">
        <MenuIcon className="h-8 text-seccondary"/>
      </button>
      </div>
      

      <div onClick={() => setSlideNav(!slideNav)} className={`${!slideNav && ' hidden'} fixed h-screen w-full bg-dark z-30 opacity-50 sm:hidden`}/>

      {/*Shows the categories on UI */}
      <nav className={`${!slideNav && '-left-full'} fixed h-screen w-3/4 px-5 pt-10 pb-6 flex flex-col justify-between bg-white shadow-xl rounded-r-3xl z-50 sm:left-10 sm:w-72 sm:mt-8 sm:rounded-t-3xl sm:rounded-b-none sm:absolute`}>
        <div className="flex flex-col h-5/6 overflow-scroll scrollbar-hide">
          {categoriesList.map((category, idx) => {
            return (
              <Link
                key={idx}
                to={`/${category.categoryName.replaceAll(' ', '-')}`}
                className={`py-5 px-8 font-semibold rounded-2xl ${sampleLocation === category.categoryName.replaceAll(' ','-') && ' bg-seccondary text-primary'} hover:text-primary`}
                onClick={() => setSlideNav(!slideNav)}
              >
                {category.categoryName}
              </Link>
            );
          })}

          <CreateNewCategory addNewCategory={addNewCategory} />
        </div>

        <div>
          <LogOut deleteAllCategories={deleteAllCategories}/>
        </div>
      </nav>
    </div>
  );
};

export default Categories;
