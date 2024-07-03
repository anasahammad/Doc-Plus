import man1 from "../../assets/man1.png"
import man2 from "../../assets/man2.png"
import man3 from "../../assets/man3.png"
import ratings from "../../assets/icons/Vector.png"

const cards = [
    {
        title: "Expertise and Compassion Combined",
        description: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
        image: man1,
        name: "Sarah D",
        profession: "It Professional",
        ratings: [ 
            ratings, ratings, ratings, ratings, ratings
        ]

    },
    {
        title: "Life-Saving Care, Life-Changing Experience",
        description: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
        image: man3,
        name: "Michael R",
        profession: "Business Executive",
        ratings: [ 
           
            ratings, ratings, ratings, ratings, ratings
        ]

    },
    {
        title: "A Partner in Health and Wellness",
        description: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and.",
        image: man2,
        name: "David S",
        profession: "Lawyer",
        ratings: [ 
            ratings, ratings, ratings, ratings, ratings
            
        ]

    },

]
const TestimonialSec = () => {
    return (
        <section className="my-12">
            <button className="px-4 hover:bg-[#FFC637] transition-all duration-700 hover:text-white hover:border-white text-[#020043] text-xl font-medium py-2 rounded-full border border-[#343268]">
          Testimonial
        </button>

        <h2 className="text-[#020043] font-semibold text-4xl leading-[54px] mt-4">
        What they say about us
        </h2>

        {/* Testimonial Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[30px]">
        
        {
            cards.map((card, idx)=> (
                <div className="bg-[#FFFFF5] p-5 rounded-2xl" key={idx}>
                    <div className="space-y-4">
                        <h3 className="text-[#020043] font-semibold text-[19px] leading-[28px] ">{card.title}</h3>
                        <p className="">{card.description}</p>

                        <div className="flex gap-3">
                            <div>
                                <img src={card.image} alt="" />
                            </div>

                                <div>
                                    <span className="flex">
                                        <h4 className="font-semibold">{card.name}</h4>, {card.profession}
                                    </span>

                                    <div className="flex gap-1">
                                        {card.ratings.map((rating, idx)=> (
                                            <img className="h-[14px] w-[14px]" key={idx} src={rating} alt=""/>
                                        ))}
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            ))
        }
            
        </div>

        <div className="flex justify-center items-center gap-3 my-10">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-4 bg-[#FFC637] rounded-full"></div>
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
        </div>
        </section>
    );
};

export default TestimonialSec;