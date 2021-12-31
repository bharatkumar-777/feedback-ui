// components
import React from "react";
import Header from "./components/Header";
// import FeedbackItem from './components/FeedbackItem';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";


import FeedbackInput from "./components/FeedbackInput";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Aboutlink from "./components/Aboutlink";

import {FeedbackProvider} from './context/FeedbackContext'


function App() {
  
  
 
  return (
    <>
    <FeedbackProvider>
      <Router>
        <Header text="hello world" />
        <div className="container">
          {/* <h1>Hello world</h1> */}
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackInput />
                  <FeedbackStats />
                  <FeedbackList
                   
                  />
                </>
              }
            />
            <Route path="/about" element={ <AboutPage />}/>
           
          </Routes>
            <Aboutlink/>
        </div>
      </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
