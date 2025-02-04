import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Population data
const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
];

const BarChart = () => {
  return (
    <div className="container">
      <h1>30 Days Of React</h1>
      <h2 className="subheading">World Population</h2>
      <p>Ten Most populated Countries</p>
      <div className="chart-container">
        {tenHighestPopulation.map((country, index) => (
          <div key={index} className="chart-row">
            <div className="country">{country.country}</div>
            <div className="bar-container">
              <div
                className="bar"
                style={{
                  width: country.country === 'World' ? '100%' : `${(country.population / tenHighestPopulation[0].population) * 100}%`,
                  height: 40,
                }}
              />
            </div>
            <div className="population">{country.population.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BarChart />
  </React.StrictMode>
);
