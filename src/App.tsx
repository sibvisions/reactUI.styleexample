import React from 'react';
import './App.css';
//import './green-scheme.scss';
//import'./basti_big.scss';
import "reactUI/public/color-schemes/dark-scheme.css";
import "reactUI/public/themes/basti.css";
import "./themeABC.css"
import { ReactUI } from 'reactUI';

function App() {
  return (
    <ReactUI colorScheme="dark" theme="basti" />
  );
}

export default App;
