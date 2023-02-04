import React from "react"
import Home from "./container/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Box from "./components/box/box";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/"element={<Box/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
