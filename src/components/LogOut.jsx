import React from 'react';
import {LogoutIcon} from '@heroicons/react/solid'

const LogOut = ({deleteAllCategories}) => {
    return (
            <button className="py-12 px-8 font-semibold text-primary inline-flex items-center space-x-2 hover:text-dark"
            onClick={deleteAllCategories}>
              Delete all
              {/* Sign out <LogoutIcon className="h-6 ml-5"/> */}
            </button>
    );
};

export default LogOut;