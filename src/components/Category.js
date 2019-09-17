import React from 'react';

const Category = (props) => {
    return (
        <div className='header' onClick={props.showFact}>
            <p>{props.header[0].toUpperCase() + props.header.slice(1, )}</p>
        </div>
    )
}

export default Category;