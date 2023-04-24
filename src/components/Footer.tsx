import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa/index'

const Footer: React.FC = () => {
  return (
    <footer className="mt-[150px] p-[25px] bg-secondaryColor">
      <ul className="p-0 flex justify-around list-none">
        <li>
          <a
            href="https://github.com/Waxer59"
            id="github-btn"
            target="_blank"
            aria-label="Wadev github profile"
            rel="noreferrer">
            <FaGithub className="text-[2.5rem]" />
          </a>
        </li>
        <li>
          <a
            href="#"
            id="linkedin-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="Wadev linkedin profile">
            <FaLinkedin className="text-[2.5rem]" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Waxer59"
            id="twitter-btn"
            target="_blank"
            aria-label="Wadev twitter profile"
            rel="noreferrer">
            <FaTwitter className="text-[2.5rem]" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
