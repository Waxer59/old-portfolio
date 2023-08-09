import { FaMoon, FaSun, FaBars } from 'react-icons/fa/index'
import { AiOutlineClose } from 'react-icons/ai/index'
import { useEffect, useState } from 'react'
import { LocalStorageItems, useLocalStorage } from '../hooks/useLocalStorage'

const THEMES = {
  dark: 'dark',
  light: 'light'
}

const Navbar: React.FC = () => {
  const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage()
  const [theme, setTheme] = useState(
    getLocalStorageItem(LocalStorageItems.theme) ?? THEMES.dark
  )
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onThemeTogglerClick = (): void => {
    setTheme((currentTheme: any) =>
      currentTheme === THEMES.dark ? THEMES.light : THEMES.dark
    )
  }

  useEffect(() => {
    setLocalStorageItem(LocalStorageItems.theme, theme)
    document.querySelector('html')?.classList.add(theme)
    document
      .querySelector('html')
      ?.classList.remove(theme === THEMES.dark ? THEMES.light : THEMES.dark)
  }, [theme])

  return (
    <nav className="max-w-[1440px] w-[90%] mx-auto">
      <header className="relative mt-[24px] mb-[148px] flex justify-between sm:gap-0 gap-[15px]">
        <h2 className="text-[1.5rem]">
          Wa<strong>dev</strong>
        </h2>

        <ul className="right-[38px] sm:right-0 sm:relative p-0 items-center ml-auto sm:ml-0 flex gap-[10px] sm:gap-[20px] flex-no-wrap text-[1.3rem] flex-col sm:flex-row">
          <li className="flex sm:hidden text-[1.5rem]">
            <input
              className="absolute block sm:hidden h-[1.5rem] w-[1.5rem] z-5 opacity-0 cursor-pointer"
              type="checkbox"
              id="barsMenuChkbx"
              aria-label="Hamburger menu"
              onChange={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
            />
            <span className={`${isMenuOpen ? 'hidden' : 'block'}`}>
              <FaBars />
            </span>
            <span className={`${isMenuOpen ? 'block' : 'hidden'}`}>
              <AiOutlineClose />
            </span>
          </li>
          <li
            className={`absolute top-[38px] sm:top-0 sm:relative items-center flex gap-[10px] sm:gap-[20px] flex-no-wrap text-[1.3rem] flex-col sm:flex-row ${
              isMenuOpen ? '' : 'hidden sm:flex'
            }`}>
            <div>
              <a className="about-btn" type="button" href="#about">
                About
              </a>
            </div>
            <div>
              <a className="skillset-btn" type="button" href="#skillset">
                Skillset
              </a>
            </div>
            <div>
              <a className="proyects-btn" type="button" href="#proyects">
                Proyects
              </a>
            </div>
            <div>
              <a className="contact-btn" type="button" href="#contact">
                Contact
              </a>
            </div>
            <div>
              <a
                className="blog-btn"
                href="https://blog.wadev.dev/"
                target="_blank"
                rel="noreferrer">
                Blog
              </a>
            </div>
          </li>
        </ul>

        <div className="text-[1.5rem]">
          <button
            id="toggler"
            type="button"
            className="toggler"
            aria-label="toggle"
            onClick={onThemeTogglerClick}>
            <span className={`${theme === THEMES.dark ? 'block' : 'hidden'}`}>
              <FaMoon />
            </span>
            <span className={`${theme === THEMES.light ? 'block' : 'hidden'}`}>
              <FaSun />
            </span>
          </button>
        </div>
      </header>
    </nav>
  )
}

export default Navbar
