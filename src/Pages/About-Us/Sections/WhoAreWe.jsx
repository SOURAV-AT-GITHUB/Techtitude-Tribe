import image1 from "/About-Us/who-are-we-1.png";
import image2 from "/About-Us/who-are-we-2.png";
import pattern from '/About-Us/pattern.png'
export default function WhoAreWe() {

  return (
    <section id="who-are-we" 
    className="relative bg-light w-full
     p-3 pt-10 pb-72 min-[450px]:pb-40 sm:p-10 sm:pb-40 lg:p-28 lg:pb-56
    grid md:grid-cols-2 items-center gap-5 sm:gap-20">


      <div className="relative h-full min-h-[300px] grid grid-cols-2 gap-5 ">
        <img src={image1} alt="image1"  className=" h-[85%] z-10 object-cover object-center rounded-xl"/>
        <img src={image2} alt="image2"  className=" h-[85%] z-10 self-end object-cover object-center rounded-xl"/>
        <img src={pattern} alt="pattern" className="absolute h-full bottom-6 left-2/4 -translate-x-2/4 z-0" />
      </div>

      <div className=" flex flex-col gap-4 ">
        <p className="text-primary">WHO WE ARE</p>
        <p className="text-4xl sm:text-5xl leading-snug font-semibold">Highly Tailored IT Design, Management & Support Services</p>
        <p className="text-slate-500 leading-relaxed tracking-wider sm:font-medium">
          Accelerate innovation with world-class tech teams We’ll match you to
          an entire remote team of incredible freelance talent for all your
          software development needs.
        </p>
        <hr className="text-slate-500 my-2"/>
        <div className="flex gap-20 items-center">
          <div className="flex flex-col gap-2">
            <p className="sm:text-xl font-bold">Our Mission</p>
            <p className="text-slate-500 leading-relaxed tracking-wider sm:font-medium">
              Accelerate innovation with world-class tech teams. We help
              businesses elevate their value.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="sm:text-xl font-bold">Custom Code</p>
            <p className="text-slate-500 leading-relaxed tracking-wider sm:font-medium">
              Accelerate innovation with world-class tech teams. We help
              businesses elevate their value.
            </p>
          </div>
        </div>
      </div>


      <div className="absolute left-2/4 -translate-x-2/4 z-10 min-h-[250px]
       -bottom-60 min-[450px]:-bottom-34 md:-bottom-34 w-[90%]
        p-10 rounded-xl bg-primary text-white bottom-black-bg
        grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 gap-4 
        items-center justify-center min-[450px]:justify-between text-center">

      <div className="flex flex-col gap-3 min-[450px]:border-r">
        <p className="text-5xl font-semibold">100+</p>
        <p>Projects Completed</p>
      </div>
      <div className="flex flex-col gap-3 min-[450px]:border-r">
        <p className="text-5xl font-semibold">05+</p>
        <p>Years Of Experience</p>
      </div>
      <div className="flex flex-col gap-3 min-[450px]:border-r">
        <p className="text-5xl font-semibold">10+</p>
        <p>Team Members</p>
      </div>
      <div className="flex flex-col gap-3 min-[450px]:border-r md:border-none">
        <p className="text-5xl font-semibold ">50+</p>
        <p>Happy Clients</p>
      </div>
      </div>
    </section>
  );
}
