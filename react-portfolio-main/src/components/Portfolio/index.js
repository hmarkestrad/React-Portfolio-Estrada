import React from "react";

function Portfolio() {
    
    return (
        <section class="page-section" id="work">
            <h2>Projects</h2>
            <div class="grid-container">

        <a href="https://nameless-river-82781.herokuapp.com/login" class="grid-item minnow">
          <div>
            <h3>Minnow</h3>
            <span>JavaScript/Handlebard/MYSQL</span>
          </div>
        </a>
        
        <a href="https://codyrobbins99.github.io/project-gemini-forecast/index.html" class="grid-item project-gemini">
          <div>
            <h3>Project Gemini</h3>
            <span>JavaScript/HTML/CSS</span>
          </div>
        </a>

        <a href="https://intense-island-01116.herokuapp.com/" class="grid-item budget-tracker">
          <div>
            <h3>Budget-Tracker</h3>
            <span>JavaScript/HTML/CSS</span>
          </div>
        </a>
        
        <a href="https://ortizjavier10.github.io/run-buddy/" class="grid-item run-buddy">
          <div>
            <h3>Run Buddy</h3>
            <span>HTML/CSS</span>
          </div>
        </a>
        
        <a href="https://ortizjavier10.github.io/horiseon-social-solution-services-website/" class="grid-item horiseon">
          <div>
            <h3>Horiseon</h3>
            <span>HTML/CSS</span>
          </div>
        </a>
        
      </div>
    </section>

    )
}

export default Portfolio;