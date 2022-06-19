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
        <img src="temp_icon.jpg" width="100px"></img>
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
        <div id="about" class="about">
        <div class="grid-container1">
          <div class="item1"><p>128 Lido Street Lakeway Texas 78734</p><p>h.mark.estrada@gmail.com</p>
          </div>
          <div class="item2"><p>University of St. Thomas</p><p>Houston Texas</p></div>
  <div class="item3"><p>English - C2</p><p>Spanish - C2</p></div>  
  <div class="item4"><p>Microsoft Office &</p><p>Adobe Creative Suite</p></div>
</div>
          <h4>About Me</h4>
            <p>I have over 25 years of experience in medical device design, development, manufacturing and commercialization. I have participated in numerous mergers and acquisitions, as well as in the design, licensing and/or sale of many products currently on the market today. I love to dig into customer problems and solve them with modern technology. I create, scale and optimize product portfolios that matter. To accomplish this, I focus on key results. build amazing teams and guickly adapt to new Insignts. I have enjoyed many executive positions througnout my career In product management, product marketing technical sales, engineering, and strategy. I have four children, three boys and one daughter. I am an avid gardner, I love to cook and enjoy traveling.
            </p>
      </div>

      <div id="portfolio" class="portfolio">
        <h4>Portfolio</h4>
          <p>The design space is awash with countless design tools, plugins, websites, resources, and more promising to improve your workflow and make you a savvier designer. I have tried my hand at a lot of them over the years, but there are only a few that really stand out. This list is the cream of the crop - the most obscure, creative, unique, helpful or exceptional. Some are fun sites to be inspired from and others are tools and resources that will absolutely make you a better designer.</p>
          <div class="grid-container">
  <div class="item1"><a href="https://bhenry30.github.io/holly/" target="_blank"><img src="icon_01.png" width="200px"></img></a></div>
  <div class="item2"><a href="https://virtual-zoo-1234.herokuapp.com" target="_blank"><img src="icon_02.png" width="200px"></img></a></div>
  <div class="item2"><a href="https://ossifixtech.com" target="_blank"><img src="icon_03.png" width="200px"></img></a></div>
  <div class="item2"><a href="https://github.com/maddnty/our-glass" target="_blank"><img src="icon_04.png" width="200px"></img></a></div>

  <div class="item1"><p><a href="https://bhenry30.github.io/holly/" target="_blank">holly - Holiday Index</a></p></div>
  <div class="item1"><p><a href="https://virtual-zoo-1234.herokuapp.com" target="_blank">zoolander - Virtual Zoo</a></p></div>
  <div class="item1"><p><a href="https://ossifixtech.com" target="_blank">ossifix - Company Site</a></p></div>
  <div class="item1"><p><a href="https://github.com/maddnty/our-glass" target="_blank">ourglass - Event Blaster</a></p></div>
  
</div>
      </div>

      <div id="contact" class="bundle">
      <h4>Contact Me</h4>
      <div class="form">
        <form>
          <div className="mb-3 pt-0">
          <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required />
          </div>
          <div className="mb-3 pt-0">
          <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          />
          </div>
          <div className="mb-3 pt-0">
          <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          />
          </div>
          <div className="mb-3 pt-0">
          <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          >
          Send a message
          </button>
          </div>
        </form>
      </div>
      </div>

      <div id="resume" class="resume">
        <h4>Resume</h4>
          <ul>
            <li><strong>Next Cast & Brace</strong> - VP Operations (2016 to Present)</li>
            <li><strong>Insight Dental Systems</strong> - VP Research (2014 to 2016)</li>
            <li><strong>Encore Orthopedics</strong> - Trauma Product Manager (1998 to 2000)</li>
            <li><strong>Johnson & Johnson DePuy</strong> - Trauma Sales Manager (1996 to 1998)</li>
            <li><strong>Kingwood Medical Center</strong> - Surgical Technician (1990 to 1996)</li>
            <li><strong>United States Navy</strong> - Balboa Naval Hospital (1986 to 1990)</li>
          </ul>
      </div>

      <div>
        <h4>Professional Skills</h4>
          <p>Product Management | Project Management  |  User Experience (UX) Design | Strategic Planning</p>
          <p>HTML - Hypertext Markup  |  MySQL & SQL Databases  |  PHP - Hypertext Preprocessor  |  React</p>
      </div>
    </div>
    <div class="footer">
      <p><img src="logo_insta.png" width="20px"></img> <a href="https://www.instagram.com/markestrada98/" target="_blank">https://www.instagram.com/markestrada98/</a></p>
      <p><img src="logo_linkedIn.png" width="20px"></img> <a href="https://www.linkedin.com/in/mark-estrada-28aa873a/" target="_blank">https://www.linkedin.com/in/mark-estrada-28aa873a/</a></p>
      <p><img src="logo_github.png" width="20px"></img> <a href="https://github.com/hmarkestrad" target="_blank">https://github.com/hmarkestrad</a></p></div>
  </div>
  </>

  );
}

export default App;