import { useState } from "react";
import client1 from "/Home/Testimonials/client1.png";
import client2 from "/Home/Testimonials/client2.png";
import client3 from "/Home/Testimonials/client3.png";
import client4 from "/Home/Testimonials/client4.png";
import stars from "/Home/Testimonials/stars.svg";
export default function Testimonials() {
  const allClients = [client1, client2, client3, client4];
  const allTestimonials = [
    {
      text: "“TechtitudeTribe transformed our idea into a fully functional mobile app that exceeded our expectations. Their attention to detail, agile development process, and technical expertise helped us launch on time and within budget. We saw immediate improvements in user engagement and efficiency after implementing the app. We couldn’t be happier with the results!”",
      name: "Julie",
      location: "Delhi",
      image: client1,
    },
    {
      text: "“TechtitudeTribe transformed our idea into a fully functional mobile app that exceeded our expectations. Their attention to detail, agile development process, and technical expertise helped us launch on time and within budget. We saw immediate improvements in user engagement and efficiency after implementing the app. We couldn’t be happier with the results!”",
      name: "Steve",
      location: "Mumbai",
      image: client2,
    },
    {
      text: "“TechtitudeTribe transformed our idea into a fully functional mobile app that exceeded our expectations. Their attention to detail, agile development process, and technical expertise helped us launch on time and within budget. We saw immediate improvements in user engagement and efficiency after implementing the app. We couldn’t be happier with the results!”",
      name: "Tafy",
      location: "Bangalore",
      image: client3,
    },
    {
      text: "“TechtitudeTribe transformed our idea into a fully functional mobile app that exceeded our expectations. Their attention to detail, agile development process, and technical expertise helped us launch on time and within budget. We saw immediate improvements in user engagement and efficiency after implementing the app. We couldn’t be happier with the results!”",
      name: "Jhon",
      location: "Bangalore",
      image: client4,
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <section
      id="testimonials"
      className="relative w-full bg-light p-3 py-10 sm:p-10 lg:p-28 flex flex-col sm:flex-row items-center gap-10 sm:gap-20"
    >
      <div className="sm:w-2/5 flex flex-col gap-6">
      <div className="flex flex-col">
        <p className="text-primary font-medium">TESTIMONIALS</p>
        <p className="text-[2.5rem] font-medium">What Our Client Says</p>
        </div><p className="text-lg">
          Scroll through to see how we’ve impacted businesses like yours and why
          they continue to choose TechtitudeTribe as their trusted IT partner.
        </p>
        <button className="w-fit min-w-[150px] py-3 px-4 rounded-lg text-lg bg-primary text-white ">
          View More
        </button>
      </div>

      <div className=" sm:w-3/5 flex flex-col sm:flex-row gap-6 z-0">

        <div className="sm:w-5/6 h-fit self-center flex flex-col gap-6 bg-white p-8 rounded-2xl">
          <img src={stars} alt="stars" className="w-fit " />
          <p>{allTestimonials[active].text}</p>
          <div className="flex gap-5">
            <img
              src={allTestimonials[active].image}
              alt=""
              className="w-18 h-18 object-cover object-top rounded-full"
            />
            <div>
              <p className="text-lg font-medium">
                {allTestimonials[active].name}
              </p>
              <p className="text-slate-500 text-lg">
                {allTestimonials[active].location}
              </p>
            </div>
          </div>
        </div>

        <div className="clients-timeline z-10 relative sm:w-1/6 flex justify-between sm:flex-col items-center gap-4 sm:gap-10">
          {allClients.map((client, index) => (
            <img
              src={client}
              alt=""
              key={index}
              onClick={() => setActive(index)}
              className={`w-14 sm:w-18 h-14 sm:h-18 object-cover object-top rounded-full border-4 cursor-pointer  ${
                index === active ? "border-primary" : "border-transparent"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
