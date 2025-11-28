import React from 'react'
import bgimg from "../assets/bgImage1.png"

const Aboutus2 = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Background Gradient Image */}
      <img
        src={bgimg}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
                   -translate-y-[5%] w-[700px] opacity-40 -z-10 pointer-events-none"
      />

      {/* Header */}
      <div className="text-center pt-14">
        <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
          ABOUT <span className="text-blue-700">US</span>
        </h2>
        <p className="mt-2 text-gray-500 text-sm">
          Learn more about our mission, vision, and values.
        </p>
      </div>

      {/* About Section */}
      <div className="my-6 flex flex-col md:flex-row items-center gap-14 md:px-4">

        {/* Modern Video Box */}
        <div className="relative w-full md:max-w-[320px] h-[400px] p-4 rounded-2xl overflow-hidden backdrop-blur-sm">
  
  {/* Video */}
  <video
    src="/video1.mp4"
    className="w-full h-full object-cover rotate-90 rounded-2xl"
    autoPlay
    muted
    loop
    disablePictureInPicture
  />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-white text-4xl font-semibold drop-shadow-lg bg-gray-600 p-3 px-4 rounded-md">
      Ai
    </h2>
  </div>

</div>


        {/* Text Content */}
        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-gray-700 text-[15px] leading-relaxed">
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur reprehenderit voluptatum corporis facere 
            accusamus velit veniam minima id doloribus sequi.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam deleniti, ipsum sint totam dignissimos magni
            alias nostrum molestias?
          </p>

          <h3 className="font-semibold text-gray-900 text-lg mt-2">Our Vision</h3>

          <p>
            Our vision is to provide seamless, secure, and accessible
            healthcare services that improve the quality of life for
            individuals worldwide.
          </p>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          WHY <span className="text-blue-700">CHOOSE US</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 px-4">

        {/* Card 1 */}
        <div className="border border-gray-300 rounded-xl p-8 bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
          <h4 className="font-semibold text-lg text-gray-700">Efficiency</h4>
          <p className="mt-2 text-sm text-gray-600">
            Streamlined appointment scheduling that fits your lifestyle.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 rounded-xl p-8 bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
          <h4 className="font-semibold text-lg text-gray-700">Convenience</h4>
          <p className="mt-2 text-sm text-gray-600">
            Access a network of verified healthcare professionals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 rounded-xl p-8 bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
          <h4 className="font-semibold text-lg text-gray-700">Personalization</h4>
          <p className="mt-2 text-sm text-gray-600">
            Personalized recommendations and health reminders.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Aboutus2
