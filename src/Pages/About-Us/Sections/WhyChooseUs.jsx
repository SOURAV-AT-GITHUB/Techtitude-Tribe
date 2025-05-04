import image from "/Home/why-choose-us.png";
export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-secondary text-white
     p-3 pt-72 min-[450px]:pt-40 pb-10 sm:p-10 sm:pt-40 lg:p-28 lg:pt-52
      flex flex-col items-center gap-10">
      <div className="absolute w-full h-full left-0 top-0 grid grid-cols-16 gap-0 overflow-hidden ">
        {Array.from({ length: 150 }).map((_, index) => (
          <div
            className="tiles w-[95px] h-[95px] border-[0.25px] border-light opacity-5 z-0"
            key={index}
          ></div>
        ))}
      </div>

      <div className="flex flex-col gap-2 text-center items-center ">
        <p className="text-primary font-medium z-10">Why Us</p>
        <h5 className="text-[2.5rem] font-medium z-10">Why Choose Us</h5>
        <p className="md:w-2/3  text-center text-slate-400 z-10">
          We combine technical expertise with business acumen to deliver
          solutions that transform organizations. Our experiencedteam,
          innovative strategies, and commitment to excellence set us apart.
        </p>
      </div>

      <div className="lg:flex w-full bg-secondary z-10">
        <div className="flex flex-col gap-6 justify-center lg:w-1/3 border border-slate-200 rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl p-5 lg:p-10 text-center">
          <div className="rounded-xl p-3 bg-primary">
            Tailored Solutions For Everyone Business
          </div>
          <div className="border rounded-xl p-3">
            Expert Team With Proven Experience
          </div>
          <div className="border rounded-xl p-3">
            End-to-End Support & Scalabiity
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-15 lg:w-2/3 border border-slate-200 border-t-0 lg:border-t lg:border-l-0 rounded-b-2xl lg:rounded-bl-none  lg:rounded-r-2xl p-5 lg:p-10">
          <div className="lg:w-1/2 ">
            <div className="lg:w-10/12 flex flex-col justify-center gap-5">
              <p className="text-2xl font-bold leading-snug">
                Tailored Solutions For Everyone Business
              </p>
              <p className="text-sm text-slate-300 leading-7">
                We understand that no two businesses are the same, which is why
                we offer customized IT solutions that align with your specific
                goals and challenges.
              </p>
              <button className="bg-white text-primary p-3 rounded-xl w-fit ">
                Know Our Approach
              </button>
            </div>{" "}
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-end lg:p-2">
            <img
              src={image}
              className="w-full h-full min-h-[200px] bg-slate-300 rounded-xl"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
