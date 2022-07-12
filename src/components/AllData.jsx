import { useState, useEffect } from 'react';
import axios from 'axios'
import Location from './Location';
import ResidentInfo from './ResidentInfo';
import Interface from './Interface';
import title2 from '../assets/images/title2.svg'

const AllData = () => {

    const [location, setLocation] = useState({})
    const [text, setText] = useState('')
    const [click, setClick] = useState(true)
    const [interfac, setInterface] = useState(true)
    const [locationTrue, setLocationTrue] = useState(false)

    useEffect(() => {
        // const random = Math.floor(Math.random() * 126) + 1

        axios.get('https://rickandmortyapi.com/api/location/' + text)
            .then(res => setLocation(res.data))
            .catch(() => alert('1 to 126 please'))


    }, [click])

    const searchType = () => {
        setClick(!click)
        setInterface(false)
        setLocationTrue(true)


        /*         axios.get('https://rickandmortyapi.com/api/location/' + text)
                    .then(res => setLocation(res.data))
                    .catch(() => alert('Maximo 126 peee')) */
    }

    console.log(location)

    return (
        <div className={interfac ? "App-interface" : "cards-container"}>

            {interfac ? (<Interface />) : (<><img className='title2' src={title2} alt="" /></>)}

            <div>
                <input type="number" value={text} onChange={e => setText(e.target.value)} placeholder='1 to 126' />
                <button onClick={searchType}>Search</button>
            </div>

            {locationTrue ? <Location location={location} /> : <></>}

            <div className={'container'}>
                {location.residents?.map(resident => (
                    <figure key={resident}>
                        <ResidentInfo resident={resident} />
                    </figure>
                ))}
            </div>


        </div>
    );
};

export default AllData;