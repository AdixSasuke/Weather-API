import React, { useState } from 'react';
import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: "4cfcc13a96a52972dd505c9ea27584fc",
    base: "https://api.openweathermap.org/data/2.5/"
  };

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-md flex justify-center items-center flex-col">
        <div className='flex justify-center align-middle space-x-2'>
          <input 
            type="text" 
            placeholder="Search City" 
            className="p-2 px-5 rounded-full w-56 outline-none hover:shadow-sm hover:bg-white/90"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={searchPressed}
            className="bg-transparent p-2 shadow-sm rounded-full border-2 hover:bg-white/10"
          >
            <img 
              src={searchIcon} 
              alt="search"
              className='w-5'
            />
          </button>
        </div>
        {weather.main ? (
          <>
            <img src={clearIcon} alt="" className="w-[100px] my-10" />
            <p className='text-white/80 text-[5rem] p-0 m-0 font-normal font-poppins'>{Math.round(weather.main.temp)}°c</p>
            <p className='tracking-wide text-[2rem] text-white/80 p-0 m-0 font-Raleway'>{weather.name}</p>
          </>
        ) : (
          <p className='tracking-wide text-[2rem] text-white/80 p-0 m-0 font-Raleway'>No data</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
