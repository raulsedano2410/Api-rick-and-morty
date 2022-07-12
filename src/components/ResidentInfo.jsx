import { useState, useEffect } from 'react';
import axios from 'axios'
import portal from '../assets/images/portal.gif'

const ResidentInfo = ({ resident }) => {

    const [residentData, setResidenData] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        axios.get(resident)
            .then(res => setResidenData(res.data))
            .finally(() => {
                setIsLoading(false)
            })

    }, [])

    console.log(residentData)

    return (

        <>
            {isLoading ? (<div className='portal'><img src={portal} alt="portal" /></div>) : (<>
                <img src={residentData.image} alt={residentData.name} />
                <ul className='capa'>
                    <h4>Name: {residentData.name}</h4>
                    <li>Status: {residentData.status}</li>
                    <li>Birthplace: {residentData.origin?.name ? residentData.origin?.name : 'Unknown'}</li>
                    <li>Total episodes: {residentData.episode?.length ? residentData.episode?.length : '0'}</li>
                </ul>
            </>
            )}
        </>
    );
};

export default ResidentInfo;