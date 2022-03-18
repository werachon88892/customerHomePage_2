import React from 'react';

const Sidebar = ({classes,children}) => {
    return (
        <div className={classes}> 
            {children} 
        </div>
    );
};

export default Sidebar;