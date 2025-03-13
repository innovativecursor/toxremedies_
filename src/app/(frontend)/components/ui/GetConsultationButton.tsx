import React from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

const GetConsultationButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-[#0D94CD] text-white px-10 py-4 text-[15px] rounded-full shadow-md hover:bg-[#000000] cursor-pointer transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default GetConsultationButton
