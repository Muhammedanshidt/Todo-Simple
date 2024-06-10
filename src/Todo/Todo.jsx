// import React, { useRef, useState } from "react";

// const Todo = () => {
//   const [value, setValue] = useState("");
//   const [valueEdit, setValueEdit] = useState("");
//   const [editInd, setEditInd] = useState(null);
//   const [data, SetData] = useState([]);
//   const [open, setOpen] = useState(false);
//   const input = useRef(null);

//   const storeValue = () => {
//     if (value !== "") SetData((ab) => [...ab, value]);
//     setValue("");
//   };
//   const removeTodo = (ele) => {
//     SetData((ab) => ab.filter((item) => item !== ele));
//   };

//   const todoEditOpenHandle = (index) => {
//     setOpen(!open);
//     console.log(open);
//     setEditInd(index);
//   };
//   const handleKey = (event) => {
//     if (event.key === "Enter") {
//       storeValue();
//     }
//   };
//   const saveEditTodo = (ele) => {
//     setOpen(!open);
//     const updatedData = data.map((e) => {
//       if (e === ele) {
//         return valueEdit;
//       }
//       return e;
//     });
//     SetData(updatedData);
//   };

//   return (
//     <div>
//       <div>
//         <div className="flex justify-center">
//           <h1 className="text-2xl font-bold bg-red-200 w-fit px-2 rounded-lg mt-3 text-pink-600 hover:bg-pink-600 hover:text-red-200 ">
//             Todo
//           </h1>
//         </div>
//         <input
//           type="text"
//           ref={input}
//           className="border-2 rounded-md border-red-200 w-96 h-8 p-2 mt-3 mx-2"
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//           onKeyDown={handleKey}
//         />
//         <button
//           onClick={storeValue}
//           className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-100 hover:text-pink-700 hover:font-bold"
//         >
//           OK
//         </button>
//       </div>
//       <div className="w-full h-fit ">
//         {data?.map((ele, index) => (
//           <div key={index} className="flex justify-between mx-20 my-2">
//             <div className="flex gap-2">
//               <div className=" p-1 rounded-sm bg-slate-400">{index + 1}.</div>
//               {!open && editInd === index ? (
//                 <div className="flex gap-5">
//                   <input
//                     type="text"
//                     ref={input}
//                     className="border-2 rounded-md border-red-200 w-96 h-8 p-2"
//                     onChange={(e) => {
//                       setValueEdit(e.target.value);
//                     }}
//                   />
//                   <div
//                     className="px-2 py-1 rounded-md cursor-pointer  bg-red-400 text-white"
//                     //  onClick={() => todoEditOpenHandle (index)}
//                   >
//                     cancel
//                   </div>
//                   <div
//                     className="px-2 py-1 rounded-md cursor-pointer  bg-green-400 text-white"
//                     onClick={() => saveEditTodo(ele)}
//                   >
//                     save
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex gap-3">
//                   <div className=" p-1 rounded-sm bg-slate-200">{ele}</div>
//                 </div>
//               )}
//             </div>
//             <div className="flex gap-3">
//               <div
//                 className=" px-2 py-1 rounded-md cursor-pointer  bg-green-400 text-white"
//                 onClick={() => todoEditOpenHandle(index)}
//               >
//                 edit
//               </div>
//               <div
//                 className=" px-2 py-1 rounded-md cursor-pointer  bg-red-400 text-white"
//                 onClick={() => removeTodo(ele)}
//               >
//                 remove
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;


import React, { useRef, useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [valueEdit, setValueEdit] = useState("");
  const [editInd, setEditInd] = useState(null);
  const [data, SetData] = useState([]);
  const [open, setOpen] = useState(false);
  const input = useRef(null);

  const storeValue = () => {
    if (value !== "") SetData((ab) => [...ab, value]);
    setValue("");
  };
  const removeTodo = (ele) => {
    SetData((ab) => ab.filter((item) => item !== ele));
  };

  const todoEditOpenHandle = (index) => {
    setOpen(!open);
    console.log(open);
    setEditInd(index);
  };
  const handleKey = (event) => {
    if (event.key === "Enter") {
      storeValue();
    }
  };
  const saveEditTodo = (ele) => {
    setOpen(!open);
    const updatedData = data.map((e) => {
      if (e === ele) {
        return valueEdit;
      }
      return e;
    });
    SetData(updatedData);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold bg-red-200 w-fit px-2 rounded-lg mt-3 text-pink-600 hover:bg-pink-600 hover:text-red-200">
            Todo
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-3">
          <input
            type="text"
            ref={input}
            className="border-2 rounded-md border-red-200 w-full sm:w-96 h-8 p-2 mx-2 mb-2 sm:mb-0"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={handleKey}
          />
          <button
            onClick={storeValue}
            className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-100 hover:text-pink-700 hover:font-bold"
          >
            OK
          </button>
        </div>
      </div>
      <div className="w-full h-fit">
        {data?.map((ele, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between mx-4 sm:mx-20 my-2">
            <div className="flex gap-2 items-center">
              <div className="p-1 rounded-sm bg-slate-400">{index + 1}.</div>
              {!open && editInd === index ? (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center">
                  <input
                    type="text"
                    ref={input}
                    className="border-2 rounded-md border-red-200 w-full sm:w-96 h-8 p-2"
                    onChange={(e) => {
                      setValueEdit(e.target.value);
                    }}
                  />
                  <div
                    className="px-2 py-1 rounded-md cursor-pointer bg-red-400 text-white"
                    //  onClick={() => todoEditOpenHandle (index)}
                  >
                    cancel
                  </div>
                  <div
                    className="px-2 py-1 rounded-md cursor-pointer bg-green-400 text-white"
                    onClick={() => saveEditTodo(ele)}
                  >
                    save
                  </div>
                </div>
              ) : (
                <div className="flex gap-3">
                  <div className="p-1 rounded-sm bg-slate-200">{ele}</div>
                </div>
              )}
            </div>
            <div className="flex gap-3 items-center mt-2 sm:mt-0">
              <div
                className="px-2 py-1 rounded-md cursor-pointer bg-green-400 text-white"
                onClick={() => todoEditOpenHandle(index)}
              >
                edit
              </div>
              <div
                className="px-2 py-1 rounded-md cursor-pointer bg-red-400 text-white"
                onClick={() => removeTodo(ele)}
              >
                remove
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

