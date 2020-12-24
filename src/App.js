// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import TextSelector from 'text-selection-react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css';
// import {Translator, Translate} from 'react-auto-translate';
   

function App() {
  const [hidden, setHidden] = useState(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    setHidden(false);
    i18n.changeLanguage("ar");
  };

  const handler = (text) => {
    changeLanguage(); 
    // alert(text)
    console.log('selected text', text);
  }
  

  console.log(hidden);
  return (
    <div className="App mt-5 p-5 bg-warning">
      <TextSelector
        events={[
        {
            text: 'Translate',
            handler: handler
        },
        ]}
        color={'lightblue'}
        colorText={true}
      />
      {(hidden === true) ? <div>{t("description.part1")} {t("description.part2")}</div>
        : <Tippy theme={'light'} interactive={true} content={
          <div>
            {t("description.part1")} {t("description.part2")}
          </div>} >
        <div>Hello Everyone</div>
      </Tippy>
      }
      <hr/>  

       {/* <Translator
      // cacheProvider={cacheProvider}
      from='en'
      to='ar'
      googleApiKey='API_KEY'>
        <h1><Translate>Welcome!</Translate></h1>
      </Translator> */}
    </div>
  );
}

export default App;
