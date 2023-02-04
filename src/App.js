import React from "react"
import Home from "./container/Home";
import {BrowserRouter,Router,Route,Routes} from "react-router-dom";
import Box from "./components/box/box";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/"element={<Box/>}/>
          <Route path="/"element={<Page/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
