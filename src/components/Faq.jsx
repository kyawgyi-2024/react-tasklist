import React from 'react'
import useFaqStore from '../store/useFaqStore';

const Faq = ({faq:{question,answer,id,isOpen}}) => {

  const {toggleQuestion} = useFaqStore()

    const handleToggle = () => {
        // setOpen(!open);
        toggleQuestion(id);
      };
  return (
    <div className="border border-t-0 border-l-0 border-r-0 last:border-b-0 justify-end">
    <div
      onClick={handleToggle}
      className=" flex justify-between items-center select-none active:scale-90 duration-200 p-5 cursor-pointer"
    >
      <h1 className={` text-xl mr-6 ${isOpen === false ? "" : " font-bold"}`}>
        {question}
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-4 duration-300 ${
          isOpen === false ? "" : "rotate-180"
        } `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </div>
    <p className={` bg-blue-600 text-slate-300 border-none ml-6 p-5 ${isOpen === false ? "hidden" : ""}`}>
      {answer}
    </p>
  </div>
  )
}

export default Faq