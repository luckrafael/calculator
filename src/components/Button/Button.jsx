import React from 'react';
import './Button.css'

export default props => {
    let property = 'button '
    property += props.operation ? 'operation' : ''
    property += props.double ? 'double' : ''
    property += props.triple ? 'triple' : ''
    return (
        <button
            onClick={e => props.click(e.target.innerHTML)}
            className={property}>
            {props.label}
        </button>
    )
}
