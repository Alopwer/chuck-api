import React from 'react';
import Fact from './Fact';
import FactButton from './FactButton';

const FactInfo = (props) => {
    return (
        <div className='fact-box'>
            <Fact fact={props.fact}/>
            <FactButton reloadFact={props.reloadFact}/>
        </div>
    )

}

export default FactInfo;