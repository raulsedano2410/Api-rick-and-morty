import { useState, useEffect } from 'react';
import axios from 'axios'
import portal from '../assets/images/portal.gif'

const ResidentInfo = ({ resident }) => {

    const [residentData, setResidenData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const [died, stateDied] = useState('#09168883')
    const [colorText, setColorText] = useState('#091688')

    const condition = () => {
        if (residentData.status === "Alive") {
            stateDied('#0fcc1f83')
            setColorText('#0fcc1f')
        }
        else if (residentData.status === "Dead") {
            stateDied('#88090983')
            setColorText('#880909')
        }
    }

    useEffect(() => {

        axios.get(resident)
            .then(res => setResidenData(res.data))
            .finally(() => {
                setIsLoading(false)
                condition()
            })

    }, [residentData.status])



    console.log(residentData)

    return (

        <>
            {isLoading ? (<div className='portal'><img src={portal} alt="portal" /></div>) : (
                <>
                    <img className='img' src={residentData.image} alt={residentData.name} />

                    <ul style={{ backgroundColor: died }} className='capa' >

                        <h4>Name: {residentData.name}</h4>
                        <li>Status: <strong style={{ color: colorText, fontSize: '1rem' }}>{residentData.status}</strong></li>
                        <li>Birthplace: {residentData.origin?.name ? residentData.origin?.name : 'Unknown'}</li>
                        <li>Total episodes: {residentData.episode?.length ? residentData.episode?.length : '0'}</li>

                    </ul>
                </>
            )}
        </>
    );
};

export default ResidentInfo;