import React from 'react';

function Widget({title,children}) {
    return (
        <div className="widget">
            <h5>{title}</h5> 
            {children} 
        </div>
    );
}

export default Widget;