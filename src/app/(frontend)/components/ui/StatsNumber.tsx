'use client'

import CountUp from 'react-countup'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const StatsNumber = () => {
  const [startCount, setStartCount] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      setStartCount(true)
    } else {
      setStartCount(false)
    }
  }, [inView])

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 text-gray-700">
        {[
          {
            number: 35,
            text: 'Years of Expertise',
            color: 'text-[#0D94CD]',
            adjustLeft: false,
            borderRight: true,
          },
          {
            number: 90,
            text: 'Publications',
            color: 'text-[#99C53E]',
            adjustLeft: true,
            borderRight: true,
          },
          {
            number: 10,
            text: 'Awards',
            color: 'text-[#0D94CD]',
            adjustLeft: true,
            borderRight: true,
          },
          {
            number: 11,
            text: 'Expert Committees',
            color: 'text-[#99C53E]',
            adjustLeft: false,
            borderRight: false,
          },
        ].map((stat, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center px-4 
              ${stat.borderRight ? 'lg:border-r-2 lg:border-gray-300' : ''}`}
          >
            <span className={`text-6xl md:text-9xl font-light ${stat.color} opacity-40`}>
              {startCount ? (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2}
                  key={inView ? stat.number : `reset-${stat.number}`}
                />
              ) : (
                '0'
              )}
              +
            </span>
            <span
              className={`absolute text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#272727] 
                ${stat.adjustLeft ? 'left-6 lg:left-[100px]' : 'left-9 lg:left-[37px]'}`}
            >
              {stat.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsNumber
