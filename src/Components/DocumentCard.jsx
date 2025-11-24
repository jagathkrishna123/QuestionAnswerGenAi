// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const DocumentCard = ({docitem}) => {
//     const {file, _id, department} = docitem;
//     const navigate = useNavigate()
//   return (
//     <div onClick={()=> navigate(`/open-doc/${_id}`)} className=' w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer'>
//         {/* <img src={image} alt="" className='aspect-video'/> */}
//         <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{department}</span>
//     </div>
//   )
// }

// export default DocumentCard
//.........................................................................................................

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const DocumentCard = ({ docitem }) => {
//   const { file, _id, department } = docitem;
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/open-doc/${_id}`)}
//       className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
//     >
//       {/* PDF Preview */}
//       <div className="aspect-video bg-gray-200 flex items-center justify-center">
//         <Document file={file} loading="Loading..." error="Failed to load">
//           <Page pageNumber={1} width={300} />
//         </Document>
//       </div>

//       <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
//         {department}
//       </span>
//     </div>
//   );
// };

// export default DocumentCard;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

// THE ONLY CORRECT PATH FOR REACT-PDF v10
import workerSrc from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const DocumentCard = ({ docitem }) => {
  const { file, _id, department, semester } = docitem;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/open-doc/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <div className="w-[180px] h-[220px] overflow-hidden bg-gray-200 flex items-center justify-center rounded-md">
        <Document
          file={file}
          loading="Loading PDF..."
          error="Failed to load PDF"
        >
          <Page pageNumber={1} width={180} />
        </Document>
      </div>

      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {department} {semester}
      </span>
    </div>
  );
};

export default DocumentCard;
