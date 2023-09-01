import { FaMoon, FaSun, FaBars } from 'react-icons/fa/index'
import { AiOutlineClose } from 'react-icons/ai/index'
import { useEffect, useState } from 'react'
import { LocalStorageItems, useLocalStorage } from '../../hooks/useLocalStorage'

const THEMES = {
  dark: 'dark',
  light: 'light'
}

const NAVBAR_ITEMS = ['about', 'skillset', 'projects', 'contact']

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
    <nav className="max-w-[1440px] w-11/12 mx-auto">
      <header className="relative mt-6 mb-36 flex justify-between sm:gap-0 gap-4 items-center">
        <h2 className="text-[1.5rem]">
          Wa<strong>dev</strong>
        </h2>

        <ul className="right-[38px] sm:right-0 sm:relative p-0 items-center ml-auto sm:ml-0 flex gap-2 sm:gap-5 flex-no-wrap text-md sm:text-xl flex-col sm:flex-row">
          <li className="flex sm:hidden text-xl sm:text-2xl hover:text-hoverColor transition-colors">
            <input
              className="absolute block sm:hidden h-[1.5rem] w-[1.5rem] z-5 opacity-0 cursor-pointer"
              type="checkbox"
              id="barsMenuChkbx"
              aria-label="Hamburger menu"
              onChange={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
            />
            <span
              className={`${
                isMenuOpen ? 'hidden' : 'block'
              }  hover:text-hoverColor transition-colors`}>
              <FaBars />
            </span>
            <span className={`${isMenuOpen ? 'block' : 'hidden'}`}>
              <AiOutlineClose />
            </span>
          </li>
          <li
            className={`absolute top-[38px] sm:top-0 sm:relative items-center flex gap-1 sm:gap-5 flex-no-wrap flex-col sm:flex-row ${
              isMenuOpen ? '' : 'hidden sm:flex-row'
            }`}>
            {NAVBAR_ITEMS.map((el) => (
              <a
                className="transition-colors capitalize hover:text-hoverColor"
                key={el}
                href={`#${el}`}>
                {el}
              </a>
            ))}

            <a
              className="transition-colors hover:text-hoverColor"
              href="https://blog.wadev.dev/"
              target="_blank"
              rel="noreferrer">
              Blog
            </a>
          </li>
        </ul>

        <button
          className="text-xl sm:text-2xl hover:text-hoverColor transition-colors"
          aria-label="toggle"
          onClick={onThemeTogglerClick}>
          <span className={`${theme === THEMES.dark ? 'block' : 'hidden'}`}>
            <FaMoon />
          </span>
          <span className={`${theme === THEMES.light ? 'block' : 'hidden'}`}>
            <FaSun />
          </span>
        </button>
      </header>
    </nav>
  )
}

export default Navbar
