import { FaMoon, FaSun, FaBars } from 'react-icons/fa/index'
import { AiOutlineClose } from 'react-icons/ai/index'
import { useEffect, useState } from 'react'
import { LocalStorageItems, useLocalStorage } from '../hooks/useLocalStorage'

const THEMES = {
  dark: 'dark',
  light: 'light'
}

const RESPONSIVE_MENU_WIDTH = 640

const Navbar: React.FC = () => {
  const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage()
  const [theme, setTheme] = useState(
    getLocalStorageItem(LocalStorageItems.theme) ?? THEMES.dark
  )
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [screenSize, getDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const setDimension = (): void => {
    getDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

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
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <nav className="max-w-[1440px] w-[90%] mx-auto">
      <header className="relative mt-[24px] mb-[148px] flex justify-between sm:gap-0 gap-[15px]">
        <h2 className="text-[1.5rem]">
          Wa<strong>dev</strong>
        </h2>

        <ul className="absolute right-[38px] sm:right-0 sm:relative p-0 items-center ml-auto sm:ml-0 flex gap-[10px] sm:gap-[20px] flex-no-wrap text-[1.3rem] flex-col sm:flex-row">
          <input
            className="absolute block sm:hidden h-[1.5rem] w-[1.5rem] z-5 opacity-0 cursor-pointer"
            type="checkbox"
            id="barsMenuChkbx"
            aria-label="Hamburger menu"
            onChange={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          />
          <div className="flex block sm:hidden text-[1.5rem]">
            <span className={`${isMenuOpen ? 'hidden' : 'block'}`}>
              <FaBars />
            </span>
            <span className={`${isMenuOpen ? 'block' : 'hidden'}`}>
              <AiOutlineClose />
            </span>
          </div>
          <div
            className={`absolute top-[38px] sm:top-0 sm:relative items-center flex gap-[10px] sm:gap-[20px] flex-no-wrap text-[1.3rem] flex-col sm:flex-row ${
              screenSize.width < RESPONSIVE_MENU_WIDTH && !isMenuOpen
                ? 'hidden'
                : 'block'
            }`}>
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
          </div>
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
