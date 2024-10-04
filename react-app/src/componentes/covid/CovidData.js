import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './CovidData.css';


const CovidData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) return <div className='loading'>Loading...</div>;

  return (
    <div className='covid-container'>
      <h1 className='covid-title'>COVID-19 Global Data</h1>
      <p className='covid-stats'>Cases: {data.cases} </p>
      <p className='covid-stats'>Deaths: {data.deaths}</p>
      <p className='covid stats'>Recovered: {data.recovered}</p>
    </div>
  );
};

export default CovidData;
