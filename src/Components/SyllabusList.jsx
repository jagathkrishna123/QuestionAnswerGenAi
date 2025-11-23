import React, { useState } from "react";
// import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "framer-motion";
import DocumentCard from "./DocumentCard";
import { DEPARTMENTCATEGORIES, DOCUMENTDATA } from "../assets/assets";

const SyllabusList = () => {
    const [menu, setMenu] = useState("All")
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
            {DEPARTMENTCATEGORIES.map((item)=> (
                <div key={item} className="relative">
                    <button onClick={()=> setMenu(item)} className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}>
                        {item}

                        {menu === item && (
                            <motion.div layoutId="underline"
                                transition={{type:'spring', stiffness:500, damping: 30}}
                             className="absolute left-0 right-0 top-0 h-7 -z-1 bg-blue-800 rounded-full">

                        </motion.div>
                        )}
                        
                    </button>
                </div>
            ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {/* ---blog cards--- */}
        {DOCUMENTDATA.filter((item)=> menu === "All" ? true : item.department === menu).
        map((docitem)=> <DocumentCard key={docitem._id} docitem={docitem}/>)}
      </div>
    </div>
  );
};

export default SyllabusList;