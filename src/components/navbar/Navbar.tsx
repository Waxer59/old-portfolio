import './Navbar.css'
import { FaMoon, FaSun, FaBars } from 'react-icons/fa/index'
import { AiOutlineClose } from 'react-icons/ai/index'
import { useEffect, useRef, useState } from 'react'
import { LocalStorageItems, useLocalStorage } from '../../hooks/useLocalStorage'

const THEMES = {
  dark: 'dark-theme',
  light: 'light-theme'
}

export const Navbar = (): JSX.Element => {
  const moonIcon = useRef<HTMLElement>(null)
  const sunIcon = useRef<HTMLElement>(null)
  const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage()
  const [theme, setTheme] = useState(THEMES.dark)

  const onThemeTogglerClick = (): void => {
    moonIcon.current?.classList.toggle('hide')
    sunIcon.current?.classList.toggle('hide')

    setTheme((currentTheme) => {
      return currentTheme === THEMES.dark ? THEMES.light : THEMES.dark
    })
  }

  useEffect(() => {
    setLocalStorageItem(LocalStorageItems.theme, theme)
    document.querySelector('html')?.classList.add(theme)
    document
      .querySelector('html')
      ?.classList.remove(theme === THEMES.dark ? THEMES.light : THEMES.dark)
  }, [theme])

  useEffect(() => {
    const scrollToHashElement = (): never | undefined => {
      const { hash } = window.location
      const elementToScroll = document.getElementById(hash?.replace('#', ''))
      if (elementToScroll === null) {
        return
      }
      window.scrollTo({
        top: elementToScroll.offsetTop,
        behavior: 'smooth'
      })
    }
    scrollToHashElement()
    setTheme(getLocalStorageItem(LocalStorageItems.theme))
  }, [])

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
              aria-label="toggle"
              onClick={onThemeTogglerClick}>
              <span ref={moonIcon}>
                <FaMoon />
              </span>
              <span ref={sunIcon} className="hide">
                <FaSun />
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
