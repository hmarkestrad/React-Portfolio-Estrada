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
  <>
  <div class="content">
    <div class="header">
      <div class="badge">
        <img src="temp_icon.jpg" width="50px"></img>
        H. Mark Estrada | Portfolio
      </div>
      <div class="navigation">
        <ul>
          <li class="crumb"><a href="#resume">Resume</a></li>
          <li class="crumb"><a href="#contact">Contact</a></li>
          <li class="crumb"><a href="#portfolio">Portfolio</a></li>
          <li class="crumb"><a href="#about">About Me</a></li>
          <li class="crumb"><a href="#home">Home</a></li>
        </ul>
      </div>
    </div>
    <div class="main">
      <h4>About Me</h4>
      <p>I have over 25 years of experience in medical device design, development, manufacturing and commercialization. I have participated in numerous mergers and acquisitions, as well as in the design, licensing and/or sale of many products currently on the market today. I love to dig into customer problems and solve them with modern technology. I create, scale and optimize product portfolios that matter. To accomplish this, I focus on key results. build amazing teams and guickly adapt to new Insignts. I have enjoyed many executive positions througnout my career In product management, product marketing technical sales, engineering, and strategy. I have four children, three boys and one daughter. I am an avid gardner, I love to cook and enjoy traveling.</p>

      <h4>Portfolio</h4>
      <p>The design space is awash with countless design tools, plugins, websites, resources, and more promising to improve your workflow and make you a savvier designer. I have tried my hand at a lot of them over the years, but there are only a few that really stand out. This list is the cream of the crop - the most obscure, creative, unique, helpful or exceptional. Some are fun sites to be inspired from and others are tools and resources that will absolutely make you a better designer.</p>

      <h4>Contact</h4>
      <p>I have over 25 years of experience in medical device design, development, manufacturing and commercialization. I have participated in numerous mergers and acquisitions, as well as in the design, licensing and/or sale of many products currently on the market today. I love to dig into customer problems and solve them with modern technology. I create, scale and optimize product portfolios that matter. To accomplish this, I focus on key results. build amazing teams and guickly adapt to new Insignts. I have enjoyed many executive positions througnout my career In product management, product marketing technical sales, engineering, and strategy. I have four children, three boys and one daughter. I am an avid gardner, I love to cook and enjoy traveling.</p>

      <h4>Resume</h4>
      <p>I have over 25 years of experience in medical device design, development, manufacturing and commercialization. I have participated in numerous mergers and acquisitions, as well as in the design, licensing and/or sale of many products currently on the market today. I love to dig into customer problems and solve them with modern technology. I create, scale and optimize product portfolios that matter. To accomplish this, I focus on key results. build amazing teams and guickly adapt to new Insignts. I have enjoyed many executive positions througnout my career In product management, product marketing technical sales, engineering, and strategy. I have four children, three boys and one daughter. I am an avid gardner, I love to cook and enjoy traveling.</p>

      <h4>Professional Skills</h4>
      <p>I have over 25 years of experience in medical device design, development, manufacturing and commercialization. I have participated in numerous mergers and acquisitions, as well as in the design, licensing and/or sale of many products currently on the market today. I love to dig into customer problems and solve them with modern technology. I create, scale and optimize product portfolios that matter. To accomplish this, I focus on key results. build amazing teams and guickly adapt to new Insignts. I have enjoyed many executive positions througnout my career In product management, product marketing technical sales, engineering, and strategy. I have four children, three boys and one daughter. I am an avid gardner, I love to cook and enjoy traveling.</p>
    </div>
    <div class="footer">footer</div>
  </div>
  </>

  );
}

export default App;