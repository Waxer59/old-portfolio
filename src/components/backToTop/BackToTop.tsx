import './BackToTop.css'
import { FaChevronUp } from 'react-icons/fa/index'
import { useRef, useEffect } from 'react'

export const BackToTop = (): JSX.Element => {
  const backToTopBtn = useRef<any>(null)

  const onBackToTopBtnClick = (): void => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = (e: Event): void => {
      if (window.scrollY > 100) {
        backToTopBtn.current.style.display = 'block'
      } else {
        backToTopBtn.current.style.display = 'none'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      id="backToTop-btn"
      style={{ display: `${window.scrollY > 100 ? 'block' : 'none'}` }}
      className="backToTop"
      aria-label="Back to top button"
      ref={backToTopBtn}
      onClick={onBackToTopBtnClick}>
      <FaChevronUp />
    </button>
  )
}
