import React from 'react';

const SharedBtn = ({children}) => {
    return (
        <button type="button" className="btn text-white border-none bg-gradient-to-r from-sky-300 to-cyan-700 ">
            {children}
        </button>
    );
};

export default SharedBtn;