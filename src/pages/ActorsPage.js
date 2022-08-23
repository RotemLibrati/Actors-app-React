import React, { useState, useEffect } from 'react';
import './ActorPage.css';

//Component
import ActorsTable from '../components/ActorsTable';
import Spinner from '../components/layout/Spinner';

//API request
import { getActors } from '../service/service';

const ActorsPage = () => {
    const [actors, setActors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
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