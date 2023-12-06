import React from 'react';
import Header from './header';
import Person from './body';
import './body.css';


const App1 =() =>{
    return(
        <div className='container-fluid min-vh-100'>
            <div className='App1'>
                <Header/>
                <Person />
            
            </div>
        </div>
    )
}

export default App1;