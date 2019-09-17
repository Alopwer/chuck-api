import React from 'react';

const FactButton = (props) => {
    return (
        <button id='btn' onClick={props.reloadFact}>
            Give me a new fact
        </button>
    )

}

export default FactButton;