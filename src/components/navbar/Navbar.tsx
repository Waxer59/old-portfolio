import './Navbar.css'
import { FaMoon, FaSun, FaBars } from 'react-icons/fa/index'
import { AiOutlineClose } from 'react-icons/ai/index'

export const Navbar = () => {
  const onNavButtonClick = () => {}
  return (
    <div className="container">
      <header className="header">
        <h2>
          Wa<strong>dev</strong>
        </h2>

        <ul className="nav-ul">
          <li>
            <button
              className="about-btn"
              type="button"
              onClick={onNavButtonClick}>
              About
            </button>
          </li>
          <li>
            <button
              className="skillset-btn"
              type="button"
              onClick={onNavButtonClick}>
              Skillset
            </button>
          </li>
          <li>
            <button
              className="proyects-btn"
              type="button"
              onClick={onNavButtonClick}>
              Proyects
            </button>
          </li>
          <li>
            <button
              className="contact-btn"
              type="button"
              onClick={onNavButtonClick}>
              Contact
            </button>
          </li>
          <li>
            <a
              className="blog-btn"
              href="https://blog.wadev.dev/"
              target="_blank">
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
                <button
                  className="about-btn"
                  type="button"
                  onClick={onNavButtonClick}>
                  About
                </button>
              </li>
              <li>
                <button
                  className="skillset-btn"
                  type="button"
                  onClick={onNavButtonClick}>
                  Skillset
                </button>
              </li>
              <li>
                <button
                  className="proyects-btn"
                  type="button"
                  onClick={onNavButtonClick}>
                  Proyects
                </button>
              </li>
              <li>
                <button
                  className="contact-btn"
                  type="button"
                  onClick={onNavButtonClick}>
                  Contact
                </button>
              </li>
              <li>
                <a
                  className="blog-btn"
                  href="https://blog.wadev.dev/"
                  target="_blank"
                  type="button">
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
