import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import linkedin from "../img/linkedin.svg";

/*
<figure className="image">
  <img src={logo} alt="blog.sardor.io" style={{ width: '88px' }} />
</figure>
*/

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/blog" className="navbar-item">
          <h3>
            <b>Home</b>
          </h3>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/nazirov91/tech-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/sardorjon-nazirov-0a0672125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="Linkedin" />
          </span>
        </a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://sardor.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">s.io</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
