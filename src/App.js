// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import { useTranslation } from "react-i18next";
// import Tippy from '@tippy.js/react';
// import 'tippy.js/dist/tippy.css'; // optional
// import 'tippy.js/themes/light.css';
import TextSelector from 'text-selection-react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
const qs = require('querystring')
// import {Translator, Translate} from 'react-auto-translate';
   

function App() {
  // const [hidden, setHidden] = useState(true);
  const [state, setState] = useState({
    arabicTranslation: ''
  })
  // const { t, i18n } = useTranslation();
  // const changeLanguage = () => {
  //   setHidden(false);
  //   i18n.changeLanguage("ar");
  // };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-rapidapi-key': "3f3dccb986msh64fdfb9f6022ffcp1d5762jsn7f27b9a8c881",
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      'useQueryString': true
    }
  }

  const handler = (text) => {
    // console.log("hii",text);
    // console.log(window.getSelection().toString());
    // changeLanguage(); 
    // alert(text)
    // setHidden(false);
    axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2',qs.stringify({
      q: window.getSelection().toString(),
      source: 'en',
      target: 'ar'
    }), config).then((res) => {
        // console.log(res.data.data.translations[0].translatedText);
      setState({ 
        arabicTranslation: res.data.data.translations[0].translatedText 
      })
    }).catch((err) => console.log("err",err))
    // console.log('selected text', text);
  }
  
  // console.log(state);
  return (
    <div className="App mt-5 p-5 bg-success">
      <TextSelector
        unmark={true}
        unmarkText="Remove"
          events={[
          {
              text: 'Translate',
              handler: handler
          },
          ]}
          color={'lightblue'}
          colorText={true}
      />
      <React.Fragment>
        <ReactTooltip place="top" type="light" effect="float"/>
          <div>
            <a data-tip={state.arabicTranslation}>
              Hello Everyone, This is a simple translation project using dynamic translation
              <br />
              Made by Mayar Elabbasy
            </a> 
          </div>
      </React.Fragment> 
    </div>
  );
}

export default App;
