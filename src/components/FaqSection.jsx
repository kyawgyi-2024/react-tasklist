import React, { useState } from "react";
import Faq from "./Faq";
import useFaqStore from "../store/useFaqStore";

const FaqSection = () => {
  // const [questions, setQuestions] = useState();

  const {questions} = useFaqStore()

  

  return (
    <div className="grid py-2 h-[500px] rounded-2xl bg-blue-600 text-slate-100 mt-20 border border-blue-600 p-5 w-[700px] mx-auto">
      <div className=" mt-10 text-3xl font-bold">
        React Frequently Asked Questions
      </div>

      <div className="ms-5">
        {questions.map((question) => (
          <Faq
            
            key={question.id}
            faq={question}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
