// import JishoAPI from 'unofficial-jisho-api';
import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
var cors = require("cors");

function App() {
  // const jisho = new JishoAPI();
  // jisho.scrapeForPhrase('谷').then((data) => {
  //   console.log(JSON.stringify(data, null, 2));
  // });

  useEffect(() => {
    let api_key = 'day'
  //  const headers =  {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //   }
    axios.get('https://jisho.org/api/v1/search/words?keyword=day', 
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',}
      )
    // axios.get(`http://beta.jisho.org/api/v1/search/words?keyword=${api_key}`, headers)
    .then((response) => {
      console.log('response from front', response.data);
    })
    .catch((error) => {
      console.log("uh oh!", error);
    });



  })



  return (
    <div className="App">
<h1>Auto-Tweet</h1>
    </div>
  );
}

export default App;
