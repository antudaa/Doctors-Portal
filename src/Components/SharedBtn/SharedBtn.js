import React from 'react';

const SharedBtn = ({children}) => {
    return (
        <button type="button" className="btn text-white border-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
            {children}
        </button>
    );
};

export default SharedBtn;