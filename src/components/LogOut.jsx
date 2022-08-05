import React from 'react';

const LogOut = ({deleteAllCategories}) => {
    return (
            <button className="py-10 px-8 font-semibold text-primary inline-flex items-center space-x-2 hover:text-dark transition-colors duration-150"
            onClick={deleteAllCategories}>
              Delete all
              {/* Sign out <LogoutIcon className="h-6 ml-5"/> */}
            </button>
    );
};

export default LogOut;