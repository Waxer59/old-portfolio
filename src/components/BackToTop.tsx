import { FaChevronUp } from 'react-icons/fa/index'
import { useRef, useEffect } from 'react'

const BackToTop: React.FC = () => {
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
      className="cursor-pointer fixed bottom-[20px] right-[15px] z-99 rounded-full text-white border-none text-[1.5rem] p-[1rem] shadow-xl bg-secondaryColor"
      aria-label="Back to top button"
      ref={backToTopBtn}
      onClick={onBackToTopBtnClick}>
      <FaChevronUp className="transition all duration-300 ease-in-out" />
    </button>
  )
}

export default BackToTop
