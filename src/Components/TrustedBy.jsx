// import React from 'react'


// const achievements = [
//     { number: "100k+", label: "Questions Generated"},
//     { number: "10k+", label: "Daily visitors" },
//     { number: "300k+", label: "Hours saved"}
//   ];

// const TrustedBy = () => {

//     const [counts, setCounts] = useState(achievements.map(() => 0));

//   useEffect(() => {
//     const intervals = achievements.map((target, i) => {
//       let current = 0;
//       const increment = Math.ceil(target.number / 60); // speed

//       const interval = setInterval(() => {
//         current += increment;
//         if (current >= target.number) {
//           current = target.number;
//           clearInterval(interval);
//         }
//         setCounts((prev) => {
//           const updated = [...prev];
//           updated[i] = current;
//           return updated;
//         });
//       }, 40);

//       return interval;
//     });

//     return () => intervals.forEach((interval) => clearInterval(interval));
//   }, []);
//   return (
//      <div className="flex flex-col w-full min-h-[280px] rounded-xl bg-gradient-to-r from-[#d7eaff] via-[#b5d9ff] to-[#8bc8ff] p-4 shadow-xl items-center justify-center gap-6">
//         <div className='flex flex-col p-6  text-center gap-2'>
//             <p className='text-gray-700 text-3xl font-medium'>Trusted by <span className='text-blue-600 font-bold'>500+</span> users</p>
//             <p className='text-gray-700 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veritat</p>
//         </div>
//         <div className='flex flex-row items-center justify-center gap-[30px]'>
//             <div className='flex flex-col text-center'>
//                 <p className='text-blue-700 text-3xl font-bold'>100k+</p>
//                 <p className='text-lg text-gray-600'>Questions Generated</p>
//             </div>

//             <div className='flex flex-col text-center'>
//                 <p className='text-blue-700 text-3xl font-bold'>10k+</p>
//                 <p className='text-lg text-gray-600'>Daily visitors</p>
//             </div>

//             <div className='flex flex-col text-center'>
//                 <p className='text-blue-700 text-3xl font-bold'>300k+</p>
//                 <p className='text-lg text-gray-600'>Hours saved</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default TrustedBy


import React, { useState, useEffect } from 'react';

const achievements = [
  { number: 100000, label: "Questions Generated" },
  { number: 10000, label: "Daily visitors" },
  { number: 300000, label: "Hours saved" }
];

const TrustedBy = () => {
  const [counts, setCounts] = useState(achievements.map(() => 0));

  useEffect(() => {
    const intervals = achievements.map((target, i) => {
      let current = 0;
      const increment = Math.ceil(target.number / 60); // controls speed

      const interval = setInterval(() => {
        current += increment;
        if (current >= target.number) {
          current = target.number;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, 40);

      return interval;
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M+";
    if (num >= 1000) return (num / 1000).toFixed(0) + "k+";
    return num;
  };

  return (
    <div className="flex flex-col w-full min-h-[280px] rounded-xl bg-gradient-to-r from-[#d7eaff] via-[#b5d9ff] to-[#8bc8ff] p-4 shadow-xl items-center justify-center gap-6">
      <div className='flex flex-col p-6 text-center gap-2'>
        <p className='text-gray-700 text-3xl font-medium'>
          Trusted by <span className='text-blue-600 font-bold'>500+</span> users
        </p>
        <p className='text-gray-700 text-[18px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veritat
        </p>
      </div>
      <div className='flex flex-row items-center justify-center gap-[30px]'>
        {achievements.map((a, i) => (
          <div key={i} className='flex flex-col text-center'>
            <p className='text-blue-700 text-3xl font-bold'>
              {formatNumber(counts[i])}
            </p>
            <p className='text-lg text-gray-600'>{a.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
