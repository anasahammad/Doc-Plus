import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const faqs = [
    {
        question: " What are your office hours?",
        answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
    },
    {
        question: " How can I schedule an appointment?",
        answer: "You can Scedule and Appointment by clciking the appointment button and direct call our helpline"
    },
    {
        question: " Do you accept insurance?",
        answer: "Yes, We accept insurance"
    },
    {
        question: " What should I bring to my appointment?",
        answer: "Please bring a valid ID, insurance card, and any relevant medical records."
    },
    {
        question: " Do you offer telemedicine appointments?",
        answer: "Yes, we offer telemedicine appointments. Please contact our office to schedule a virtual visit."
    },

]
const FaqSection = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
        <section className="my-12">
            <button className="px-4 hover:bg-[#FFC637] hover:text-white transition-all duration-700 hover:border-white text-[#020043] text-xl font-medium py-2 rounded-full border border-[#343268]">
          Faq
        </button>

        <h2 className="text-[#020043] font-semibold text-4xl leading-[54px] mt-4">
        Frequently Asked Question
        </h2>

        <div className=" p-4">
        {faqs.map((item, index) => (
        <div key={index} className="mb-4 border-b bg-[#FFFFF5] px-6 border-gray-200">
          <button
            onClick={() => toggleOpen(index)}
            className="w-full text-left py-4 border-b text-[#020043] text-xl font-semibold flex justify-between items-center"
          >
            {item.question}
            <span >{openIndex === index ? <IoChevronUpOutline />: <IoChevronDownOutline />}</span>
          </button>
          {openIndex === index && <p className="my-2 text-gray-600">{item.answer}</p>}
        </div>
      ))}
        </div>
        </section>
    );
};

export default FaqSection;