import React from "react";

function Footer() {
    return (
        <footer>
            <section className="page-section contact" id="contact">
      {/* <h2>Contact</h2> */}
      <div>
        <address className="address">
          <a class="email" href="mailto:ortiz.javier10@gmail.com">  Email </a>
          <a class="github" href="https://github.com/ortizjavier10">GitHub</a>
          <a class="linkedin" href="https://www.linkedin.com/in/javier-ortiz-7510b6132/">LinkedIn</a>
          <a class="twitter" href="https://twitter.com/JaviXavi">twitter</a>
        </address>
      </div>
    </section>
        </footer>
    )
}

export default Footer;