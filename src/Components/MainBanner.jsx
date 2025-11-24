import React from "react";
import Banner1 from "../assets/imgbg.jpg";
import Banner2 from "../assets/imgbg2.jpg";
import Star from "../assets/starblue_icon.svg";
const MainBanner = () => {
  return (
    // <div className='relative'>
    //     <img src={Banner1} alt="" className='w-full hidden md:block' />
    //     <img src={Banner2} alt="" className='w-full md:hidden' />
    // </div>
    <div className="w-full min-h-[450px] md:min-h-[600px] rounded-xl bg-gradient-to-r from-[#d7eaff] via-[#b5d9ff] to-[#8bc8ff] p-4 shadow-2xl">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-blue-600/40 bg-blue-500/10 rounded-full text-sm text-blue-700">
          <p>New: AI feature integrated</p>
          <img src={Star} alt="" className="w-2.5" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-[4.5rem] text-gray-700">
          Upload Syllabus. Get <span className="text-blue-700">Notes</span>{" "}
          <br />
          Instantly
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          Upload your syllabus and let AI generate notes, summaries, and
          questions.Everything is organized and easy to understand. Study
          smarter with instant.
        </p>
        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search Notes"
            required
            className="w-full pl-4 outline-none"
          />
          <button className="bg-blue-400 text-white px-8 py-2 m-1.5 rounded-full hover:scale-105 transition-all cursor-pointer">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainBanner;
