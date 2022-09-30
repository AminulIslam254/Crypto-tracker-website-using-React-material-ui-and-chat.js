
import './App.css';
import React from 'react';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
import { makeStyles } from '@material-ui/core';






import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));



function App() {



  const classes = useStyles();

  return (
    <>

      <BrowserRouter>
        <div className={classes.App}>

          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
          </Routes>
          <Routes>
            <Route path="/coins/:id" element={<Coinpage />} />
          </Routes>


        </div>


      </BrowserRouter>

    </>
  );
}

export default App;
