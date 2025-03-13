import React from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

const ScheduleMeetingButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`mt-6 bg-[#0D94CD] text-white px-5 md:px-7 py-2.5 md:py-5 rounded-full shadow-md md:text-[15px] hover:bg-[#000000] cursor-pointer transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default ScheduleMeetingButton
