import './Navbar.css'
import { FaMoon, FaSun, FaBars } from 'react-icons/fa/index'
import { AiOutlineClose } from 'react-icons/ai/index'

export const Navbar = (): JSX.Element => {
  return (
    <div className="container">
      <header className="header">
        <h2>
          Wa<strong>dev</strong>
        </h2>

        <ul className="nav-ul">
          <li>
            <a className="about-btn" type="button" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="skillset-btn" type="button" href="#skillset">
              Skillset
            </a>
          </li>
          <li>
            <a className="proyects-btn" type="button" href="#proyects">
              Proyects
            </a>
          </li>
          <li>
            <a className="contact-btn" type="button" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="blog-btn"
              href="https://blog.wadev.dev/"
              target="_blank"
              rel="noreferrer">
              Blog
            </a>
          </li>
        </ul>

        <div className="menu">
          <nav className="nav">
            <input
              className="checkbox"
              type="checkbox"
              id="barsMenuChkbx"
              aria-label="Hamburger menu"
            />
            <div className="hamburger-lines">
              <FaBars />
              <AiOutlineClose className="hide" />
            </div>
            <ul className="menu-items">
              <li>
                <button className="about-btn" type="button">
                  About
                </button>
              </li>
              <li>
                <button className="skillset-btn" type="button">
                  Skillset
                </button>
              </li>
              <li>
                <button className="proyects-btn" type="button">
                  Proyects
                </button>
              </li>
              <li>
                <button className="contact-btn" type="button">
                  Contact
                </button>
              </li>
              <li>
                <a
                  className="blog-btn"
                  href="https://blog.wadev.dev/"
                  target="_blank"
                  type="button"
                  rel="noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="toggler-container">
            <button
              id="toggler"
              type="button"
              className="toggler"
              aria-label="toggle">
              <FaMoon id="dark" />
              <FaSun className="hide" id="bright" />
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
