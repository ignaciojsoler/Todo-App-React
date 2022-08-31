import React, { useState} from "react";
import CreateNewCategory from "./CreateNewCategory";
import LogOut from "./LogOut";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from '@heroicons/react/solid'
import { useSpring, animated } from 'react-spring'


const Categories = ({ categoriesList, addNewCategory, deleteAllCategories }) => {

  const [slideNav, setSlideNav] = useState(false)
  const sampleLocation = useLocation().pathname.slice(1)
  const animationProps = useSpring({
    from: {x:-100, opacity:0},
    to: {x:0, opacity:1}
  })

  return (
    <animated.div style={animationProps} className="relative">
      <div className={`${slideNav && 'opacity-0'} fixed z-50  w-full bg-primary h-16 shadow-xl flex items-center transition duration-500 sm:hidden`}>
        <button onClick={() => setSlideNav(!slideNav)}
          className="absolute  my-5 ml-6 sm:hidden">
          <MenuIcon className="h-8 text-seccondary" />
        </button>
      </div>


      <div onClick={() => setSlideNav(!slideNav)} className={`${!slideNav && ' hidden'} fixed h-screen w-full bg-dark z-30 opacity-50 sm:hidden`} />

      {/*Shows the categories on UI */}
      <div className="absolute max-h-screen min-h-screen sm:pt-8 lg:h-screen">
        <nav className={`${!slideNav && '-translate-x-full'} fixed h-full w-3/4 px-5 pt-10 pb-6 flex flex-col justify-between bg-white shadow-xl rounded-r-3xl z-50 transition duration-300 ease-in-out sm:translate-x-0 sm:left-10 sm:w-72 sm:rounded-t-3xl sm:rounded-b-none sm:inline-block lg:relative lg:h-full`}>
          <div className="flex flex-col h-5/6 overflow-scroll scrollbar-hide">
            {categoriesList.map((category, idx) => {
              return (
                <Link
                  key={idx}
                  to={`/todo-app-react/${category.categoryName.replaceAll(' ', '-')}`}
                  className={`py-5 px-8 font-semibold rounded-2xl ${sampleLocation === "todo-app-react/" + category.categoryName.replaceAll(' ', '-') && ' bg-seccondary text-primary'} hover:text-primary transition-colors duration-150`}
                  onClick={() => setSlideNav(!slideNav)}
                >
                  {category.categoryName}
                </Link>
              );
            })}

            <CreateNewCategory addNewCategory={addNewCategory} />
          </div>

          <div>
            <LogOut deleteAllCategories={deleteAllCategories} />
          </div>
        </nav>
      </div>
    </animated.div>
  );
};

export default Categories;
