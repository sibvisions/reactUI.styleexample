import React, { useEffect } from 'react';
import './App.css';
//import './green-scheme.scss';
//import'./basti_big.scss';
import "reactUI/public/color-schemes/dark-scheme.css";
import "reactUI/public/themes/basti.css";
//import "./themeABC.css"
import { ReactUI, useAPI } from 'reactUI';

function App() {
  const api = useAPI();

  useEffect(() => {
    //api.addCSSToHeadBefore("/themeABC.css");
  },[])

  return (
    <ReactUI colorScheme="dark" theme="basti" design="themeABC" />
  );
}

export default App;
