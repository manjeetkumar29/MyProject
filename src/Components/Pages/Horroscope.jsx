import { useState, useEffect } from "react";
import axios from 'axios';
import HoroscopeResult from "../HoroscopeResult";
// const axios = require('axios');
export default function Horroscope(){
    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Features", path: "javascript:void(0)" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            {/* <a href="javascript:void(0)">
                <img
                    src="https://www.floatui.com/logo-dark.svg"
                    width={120}
                    height={50}
                    alt="Float UI logo"
                />
            </a> */}
            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

    // State variables for selected values
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedSign, setSelectedSign] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [horoscopeData, setHoroscopeData] = useState(null);
  // Event handlers for dropdown changes
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleSignChange = (event) => {
    setSelectedSign(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleClick = async () => {
    // Access the selected values here and send them to your API
    console.log('Selected Language:', selectedLanguage);
    console.log('Selected Period:', selectedPeriod);
    console.log('Selected Sign:', selectedSign);
    console.log('Selected Type:', selectedType);

    // Now you can send these values to your API using fetch or your preferred method
    // Example using fetch:

    const options = {
      method: 'GET',
      url: `https://horoscopes-ai.p.rapidapi.com/get_horoscope/${selectedSign}/${selectedPeriod}/${selectedType}/${selectedLanguage}`,
      headers: {
        'X-RapidAPI-Key': '74a2423726msh3a26e9ce0e8a5cdp1b8bdajsnf76125bfe2d0',
        'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data.general[0]);
        setHoroscopeData(response.data.general[0]); 

    } catch (error) {
        console.error(error);
    }
  };

    return (
        <>

        <div className="horro bg-gray-900 " >
            <header>
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`pb-4 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            {/* <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx} className="text-gray-300 hover:text-gray-400">
                                                <a href={item.path} className="block">
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex">
                                        Get started
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
            </header>
            <div className="mb-6 mx-10">
                <h2 className="text-3xl  text-green-400 font-extrabold mx-auto ">
                    Get Your Horroscope Now
                </h2>
            </div>
            <section className=" ms-4 relative flex">
                {/* <div className="flex w-72 flex-col gap-6">
                    <Input color="blue" label="Input Blue" />
                    <Input color="purple" label="Input Purple" />
                    <Input color="indigo" label="Input Indigo" />
                    <Input color="teal" label="Input Teal" />
                </div> */}
            <div className="max-w-sm w-full text-gray-600 px-5 rounded-md py-4 bg-gray-50 ms-3 mb-8   "> 
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
         
        <div>
          <label className="font-medium">Language</label>
          <select
            required
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <option value="" disabled selected>Select a Language</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ja">Japanese</option>
            <option value="ko">korean</option>
            <option value="zh-t">Chinese (transditional)</option>
            <option value="zh-s">Chinese (simplified)</option>
          </select>
        </div>

        {/* Period dropdown */}
        <div>
          <label className="font-medium">Period</label>
          <select
            required
            value={selectedPeriod}
            onChange={handlePeriodChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <option value="" disabled>Select a Period</option>
            <option value="today">today</option>
            <option value="tomorrow">tomorrow</option>
            <option value="yesterday">yesterday</option>
            <option value="yearly">yearly</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
          </select>
          {/* Display selected value */}
          {/* <p>Selected Period: {selectedPeriod}</p> */}
        </div>

        {/* Sign dropdown */}
        <div>
          <label className="font-medium">Sign</label>
          <select
            required
            value={selectedSign}
            onChange={handleSignChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <option value="" disabled selected>Select a Sign</option>
            <option value="aries">aries</option>
            <option value="taurus">taurus</option>
            <option value="gemini">gemini</option>
            <option value="cancer">cancer</option>
            <option value="leo">leo </option>
            <option value="virgo">virgo</option>
            <option value="libra">libra</option>
            <option value="scorpius">scorpius</option>
            <option value="sagittarius">sagittarius</option>
            <option value="capricornus">capricornus</option>
            <option value="aquarius">aquarius</option>
            <option value="pisces">pisces</option>
          </select>
        </div>

        {/* Type dropdown */}
        <div>
          <label className="font-medium">Type</label>
          <select
            required
            value={selectedType}
            onChange={handleTypeChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <option value="" disabled selected>Select type</option>
                            <option value="general">general</option>
          </select>
          </div>
          <button
          onClick={handleClick}
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        >
          Submit
        </button>
         </form>
        </div>   
        {horoscopeData && <HoroscopeResult horoscopeData={horoscopeData} />}
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            Explore the Stars and Your Fate
                        </h2>
                         
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex">
                             
                            {/* <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </button> */}
                        </form>
                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                             
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>
        </div>
        
        
        </>
    )
}