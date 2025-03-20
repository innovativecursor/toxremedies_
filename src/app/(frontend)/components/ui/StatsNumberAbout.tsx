'use client'

import CountUp from 'react-countup'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const StatsNumberAbout = () => {
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
    <section ref={ref} className="py-20 px-6 md:px-10 text-center bg-[#0D94CD]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 text-white">
        {[
          { number: 35, text: 'Years of Expertise', borderRight: true },
          { number: 90, text: 'Publications', borderRight: true },
          { number: 10, text: 'Awards', borderRight: true, adjustLeft: true }, // Adjusting "Awards"
          { number: 11, text: 'Expert Committees', borderRight: false },
        ].map((stat, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center px-4 
              ${stat.borderRight ? 'lg:border-r-2 lg:border-white/30' : ''}`}
          >
            <span className="text-[75px] md:text-8xl font-light text-[#51b2db] opacity-80">
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
              className={`absolute text-xs sm:text-sm md:text-base lg:text-[24px] font-medium text-[#ffff] 
                ${stat.adjustLeft ? 'left-9 lg:left-[82px]' : 'left-9 lg:left-[37px]'}`}
            >
              {stat.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsNumberAbout
