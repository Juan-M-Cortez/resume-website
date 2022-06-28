import PictureOfDay from './components/Picture_of_day/PictureOfDay';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import TodayDate from './TodaysDate';
import Footer from './components/footer/Footer';
import NearEarthObjects from './components/near_earth_objects/NearEarthObjects';
import axios from 'axios';
import ApodCardGroup from './components/apod_card_group/ApodCardGroup';
import ApodButton from './components/apod_button/ApodButton';
import './App.css';

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


/*✍ Styles for App component ✍*/
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
`;
const SampleDiv = styled.div`
  height: 300px;
`;
const PODDiv = styled.div`
  width: 18%;
  background-color: antiquewhite;
`;



function App() {
  // state will hold the array object that is return from urlTodaysPic
  const [apod, setApod] = useState([]);
  // holds current img width
  const imgWidth = useRef(0);
  const ApodDropdownHeight = useRef(0);

  // today => is assigned to a state, in order to cycle through and re-render a selected day
  const [todaysDate, setTodaysDate] = useState(TodayDate());
  // user 10 day pick
  //TenDayPick(setTodaysDate);

  const urlTodaysPic = `https://api.nasa.gov/planetary/apod?date=${todaysDate}&api_key=AgviLJFwUuAOU5MIUkxa0OCdj6bpCnRWwDOA4WsO`;

  //-----------Promise -----------
  // axios call to the APOD API, to get data
  useEffect(() => {
    axios.get(urlTodaysPic)
      .then(obj => {
        setApod(obj.data)
      })
  }, [urlTodaysPic])

  // get current img size from the Dom
  useEffect(() => {
    if (document.getElementById('img-of-day') != null) {
      imgWidth.current = document.getElementById('img-of-day').clientWidth;
    }
    if (document.getElementById('apod-id') != null) {
      ApodDropdownHeight.current =document.getElementById('apod-id').clientHeight;
    }
  })

  console.log('ApodDropdownHeight: ', ApodDropdownHeight.current);

  //-----------F(TenDayPick)-----------
  function TenDayPick(event) {
    let newDateArray = event.target.innerText.split('');

    let arrayReturn = []
    for (let index = 0; index < newDateArray.length; index++) {
      switch (index) {
        case 0:
          arrayReturn.push(newDateArray[6]);
          break;
        case 1:
          arrayReturn.push(newDateArray[7]);
          break;
        case 2:
          arrayReturn.push(newDateArray[8]);
          break;
        case 3:
          arrayReturn.push(newDateArray[9]);
          break;
        case 5:
          arrayReturn.push(newDateArray[0]);
          break;
        case 6:
          arrayReturn.push(newDateArray[1]);
          break;
        case 8:
          arrayReturn.push(newDateArray[3]);
          break;
        case 9:
          arrayReturn.push(newDateArray[4]);
          break;
        default:
          arrayReturn.push('-');
          break;
      }
    }
    setTodaysDate(arrayReturn.join(''));
  }

  console.log(urlTodaysPic)
  if (!apod.title) {
    return (
      <Div className="App">
        <Navbar />
      </Div>
    );
  } else {
    return (
      <Div className="App">

        <Navbar TenDayPick={TenDayPick} />

        <Routes>

          <Route path="/"
            element={
              <Section className='layoutstyles__content'>
                <PictureOfDay apodData={apod} imgSize={imgWidth.current} urlTodaysPic={urlTodaysPic} />
                <PODDiv>
                 <ApodButton TenDayPick={TenDayPick} ButtonHeight={ApodDropdownHeight.current}/>
                 <ApodCardGroup />
                </PODDiv>
              </Section>
            }
          />

          <Route path="/near_earth_objects"
            element={
              <NearEarthObjects />
            }
          />

        </Routes>

        <SampleDiv />
        <Footer />

      </Div>
    );
  }
}

export default App;

/*
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='expenses' element={<Expenses />} />
      <Route path='invoices' element={<Invoices />} />
    </Routes>


    <Section className='layoutstyles__content'>
                <PictureOfDay apodData={apod} imgSize={imgWidth.current} urlTodaysPic={urlTodaysPic} />
              </Section>
              <Link to="/invoices">Invoices</Link> |{" "}
              <Link to="/expenses">Expenses</Link>
*/