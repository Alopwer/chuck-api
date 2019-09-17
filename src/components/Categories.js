import React from 'react';
import Category from './Category';

const Categories = (props) => {
    const headers = props.categories.map(category => <Category header={category} key={category} showFact={props.showFact}/>);
    return (
        <div className='category-box'>
            {headers}
        </div>
    )

}

export default Categories;