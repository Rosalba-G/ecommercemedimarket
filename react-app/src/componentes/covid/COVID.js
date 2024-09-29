import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>COVID-19 Global Data</h1>
      <p>Cases: {data.cases}</p>
      <p>Deaths: {data.deaths}</p>
      <p>Recovered: {data.recovered}</p>
    </div>
  );
};

export default CovidData;
