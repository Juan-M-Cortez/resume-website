import PictureOfDay from './components/Picture_of_day/PictureOfDay';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import TodayDate from './TodaysDate';
import axios from 'axios';
import './App.css';


/*✍ Styles for App component ✍*/
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
`;


function App() {
  // state will hold the array object that is return from urlTodaysPic
  const [apod, setApod] = useState([]);
  // holds current img width
  const imgWidth = useRef(0);

  // Getting current date Format:
  // 1. recieve date
  // 2. convert date to format that is desirable => yyyy-mm-dd
  // saving to: ==> today
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

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
  }, [])

  // get current img size from the Dom
  useEffect(() => {
    if (document.getElementById('img-of-day') != null) {
      imgWidth.current = document.getElementById('img-of-day').clientWidth;
    }
  })
  
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
    console.log('innerTarget: ', arrayReturn.join(''));

    //setTodaysDate(newDate);
  }


  if (!apod.title) {
    return (
      <Div className="App">
        <Navbar />
      </Div>
    );
  } else {
    return (
      <Div className="App">

        <Navbar TenDayPick={TenDayPick}/>
        <Section className='layoutstyles__content'>
          <PictureOfDay apodData={apod} imgSize={imgWidth.current}/>
        </Section>

      </Div>
    );
  }
}

export default App;
