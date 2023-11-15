import React from 'react';
import s from './App.module.scss';
import {Main} from "./components/Main/Main";
import {SideBar} from "./components/SideBar/SideBar";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {PopUp} from "./components/PopUp/PopUp";

function App() {

    console.log('APP')

    return (
        <div className={s.appWrapper}>
            <Header/>
            <Main/>
            <SideBar/>
            <PopUp/>
            <Footer/>
        </div>
    );
}

export default App;
