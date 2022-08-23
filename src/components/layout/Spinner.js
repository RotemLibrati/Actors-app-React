import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <img src={spinner}
        style={{ width: '80px'}}
        alt="Loading.."
        />
    )
};

export default Spinner;