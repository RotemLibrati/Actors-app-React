import React, { useState, useEffect } from 'react';
import './ActorPage.css';

//Components
import ActorsTable from '../components/ActorsTable';
import Spinner from '../components/layout/Spinner';

//Http request
import { getActors } from '../service/service';

const ActorsPage = () => {
    const [actors, setActors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => { //Loading the data about the actors
        getActors()
            .then((res) => {
                setActors(res);
                setIsLoading(false); 
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    return (
        <div className='container'>
            <h1 className='title'>Actors API App By Rotem Librati</h1>
            {isLoading ? <Spinner /> : ( 
                <ActorsTable actors={actors} />
            )}
        </div>
    )
};

export default ActorsPage;