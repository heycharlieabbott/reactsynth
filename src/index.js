// import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Navbar from "./navbar";
import Slider from "./synth1/slider";
import Slidertwo from "./synth2/slidertwo";
import Error from "./error";
// import Superslider from './synth2/superslider';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/texturegen"></Navigate>}
        ></Route>
        <Route path="/texturegen" element={<Slidertwo />} />
        <Route path="/oscsteps" element={<Slider />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
