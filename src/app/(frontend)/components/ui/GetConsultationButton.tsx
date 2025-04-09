import React from 'react'

interface ButtonProps {
  text: string
  scrollToId?: string
  className?: string
}

const GetConsultationButton: React.FC<ButtonProps> = ({ text, scrollToId, className }) => {
  const handleScroll = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <button
      className={`bg-[#0D94CD] text-white px-10 py-4 text-[15px] rounded-full shadow-md hover:bg-[#000000] cursor-pointer transition ${className}`}
      onClick={handleScroll}
    >
      {text}
    </button>
  )
}

export default GetConsultationButton
