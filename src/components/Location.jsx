import React from 'react';

const Location = ({ location }) => {
    return (
        <ul className='location'>
            <li>Name: <strong> {location.name} </strong></li>
            <li>Type: <strong> {location.type} </strong> </li>
            <li>Dimension: <strong> {location.dimension} </strong></li>
            <li>Id: <strong> {location.id} </strong></li>
            <li>Total, residents: <strong> {location.residents?.length} </strong></li>
        </ul>
    );
};

export default Location;