import React from 'react'

const InfoCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="flex-1 px-6 py-6 sm:py-8 flex flex-col justify-center items-center">
      <h3 className="font-semibold text-[#0D94CD] text-center text-[20px] sm:text-[24px]">
        {title}
      </h3>
      <hr className="w-12 border-t-1 border-[#0D94CD] mx-auto my-2" />
      <p className="text-[#0D94CD] text-[12px] sm:text-[13px] font-light max-w-[90%] sm:max-w-[80%] md:max-w-[65%] text-center">
        {content}
      </p>
    </div>
  )
}

const MissionVisionSection = () => {
  return (
    <section className="bg-gradient-to-br from-white/40 via-[#EBF9FF]/40 to-[#EBF9FF]/0 px-20 py-20">
      <div className="bg-gradient-to-r container max-w-7xl from-[#CAEFFF] to-[#FFFFFF] rounded-4xl mx-auto flex flex-col sm:flex-row border border-[#97E0FF]">
        <InfoCard
          title="MISSION"
          content="To provide efficient Toxicology risk assessment for pharmaceuticals, consumer products & cosmetics, medical devices and food products."
        />
        <div className="border-l border-[#97E0FF] h-[1px] sm:h-[200px] w-full sm:w-[1px]" />
        <InfoCard
          title="VISION"
          content="To become a global trusted partner to provide end-to-end toxicology solutions under different product categories."
        />
      </div>
    </section>
  )
}

export default MissionVisionSection
