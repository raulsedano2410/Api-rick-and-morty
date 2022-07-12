import React from 'react';

const Location = ({location}) => {
    return (
            <ul>
                <li>Name: {location.name}</li>
                <li>Type: {location.type}</li>
                <li>Dimension: {location.dimension}</li>
                <li>Id: {location.id}</li>
                <li>Total, residents: {location.residents?.length}</li>
            </ul>
    );
};

export default Location;