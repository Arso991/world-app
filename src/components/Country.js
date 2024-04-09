import React from 'react';

const Country = ({country}) => {
    return (
        <li className='card'>
            <img src={country.flags.svg} alt="drapeau" />
            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Country;