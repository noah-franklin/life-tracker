import * as React from 'react';

import { Routes, Route, Link } from "react-router-dom";
import Login from './Login'
import Register from './Register'


class App extends React.Component {


  render() {

    return (


  
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="register" element={<Register />} />
      </Routes>




    );


  }

}

export default App;
