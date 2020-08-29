import React from 'react';
import './App.css';
import Header from "./Header";
import SideBar from "./SideBar";
import MainPage from "./MainPage";

 const App = () => {
  return (
    <div className = 'app_wrapper'>
        <SideBar />
        <Header />
        <MainPage />
    </div>
  );
}

export default App;
