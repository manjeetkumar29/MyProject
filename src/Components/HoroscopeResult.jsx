// HoroscopeResult.js
import React from 'react';

const HoroscopeResult = ( {horoscopeData} ) => {
  return (
    <div className="max-w-sm w-full text-gray-600 px-5 rounded-md py-4 bg-gray-50 ms-3 mb-3">
      <h2 className="text-2xl font-semibold mb-3">Horoscope Result</h2>
      {/* Render the horoscope data here */}
      {/* Adjust the rendering based on the structure of your data */}
      
      <p>{horoscopeData}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default HoroscopeResult;
