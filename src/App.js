import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import { Desktop } from "./components/desktop/desktop.component";
import { Laptop } from "./components/laptop/laptop.component";
import { BigScreen } from "../src/components/big-screen/big-screen.component";
import { Mobile } from "../src/components/mobile/mobile.component";
import { TabletMobile } from "../src/components/tablet-mobile/tablet-mobile.component";

import "./App.css";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <><div className="header">
        <div class="badge">
          <img src="temp_icon.jpg" width="100px"></img>
          H. Mark Estrada
        </div>
        <div class="navigation">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>
      </div>
    <div class="main">
      <p><h1>MAIN</h1></p> 
    </div>
    <div class="footer">
      <p>Footer</p> 
    </div></>

  );
}

export default App;