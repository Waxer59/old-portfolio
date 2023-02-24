import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa/index'
import './Footer.css'

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <ul className="links-list">
        <li>
          <a
            href="https://github.com/Waxer59"
            id="github-btn"
            target="_blank"
            aria-label="Wadev github profile"
            rel="noreferrer">
            <FaGithub className="footer-icon" />
          </a>
        </li>
        <li>
          <a
            href="#"
            id="linkedin-btn"
            target="_blank"
            aria-label="Wadev linkedin profile">
            <FaLinkedin className="footer-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Waxer59"
            id="twitter-btn"
            target="_blank"
            aria-label="Wadev twitter profile"
            rel="noreferrer">
            <FaTwitter className="footer-icon" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
