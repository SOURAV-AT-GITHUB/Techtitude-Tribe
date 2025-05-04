import achievementBadge from "/Home/achievement-badge.svg";
export default function Achievements() {
  const achievements = [
    {
      title: "Successful Product Launches ",
      description:
        "We’ve successfully launched multiple innovative products and services that have gained significant traction in the market. Our ability to deliver scalable, user-friendly solutions has resulted in high client satisfaction and a growing portfolio of successful projects.",
    },
    {
      title: "Chunauti 3.0 Centeal Government Funding ",
      description:
        "We are honored to have been selected and funded by the Central Government under the prestigious Chaunauti 3.0 program. This initiative empowers us to further innovate & provide cutting-edge digital solutions that address emerging challenges in the tech ecosystem.",
    },
    {
      title: "Incubated By Leading Tech Accelerator",
      description:
        "TechtitudeTribe was proudly incubated by a prestigious tech accelerator, where we received mentorship, networking opportunities, & resources to drive our growth. This support helped us refine our solutions and scale our business, positioning us for long-term success.",
    },
    {
      title: "Uttar Pradesh Government Support & RAISE Incubation Centre",
      description:
        "Our work has also been recognized by the Uttar Pradesh government, securing additional funding to help us scale our services and contribute to the local economy. This support enables us to expand our outreach and continue delivering impactful IT solutions.",
    },
  ];
  return (
    <section id="achievements" className="relative w-full bg-secondary text-white p-3 py-10 sm:p-10 lg:p-28 flex flex-col items-center gap-10">
      <div className="absolute w-full h-full left-0 top-0 grid grid-cols-16 gap-0 overflow-hidden ">
        {Array.from({ length: 400 }).map((_, index) => (
          <div
            className="tile w-[95px] h-[95px] border-[0.25px] border-light opacity-5 z-0"
            key={index}
          ></div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center">
        <p className="text-primary font-medium z-10">ACHIEVEMENTS</p>
        <h4 className="text-[2.5rem] font-medium z-10">Our Achievemnets</h4>
        <p className="md:w-2/3  text-center text-slate-400 z-10">
          At Techtitude Tribe, we take pride in the recognition and support
          we’ve received for our innovative solutions. Our commitment to driving
          technology-forward initiatives has garnered trust and funding from
          both national and regional bodies, fueling our growth and impact in
          the IT space.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-end gap-2 sm:gap-[1px] z-[1]">
        {achievements.map(({ title, description }, index) => (
          <div
            key={index}
            style={{height:`${((index+1)*30)+350}px`}}
            className={`light-border  relative flex flex-col justify-end gap-0 bg-secondary rounded-[16px]`}
          >
            <div className={` h-[90%] p-4 pb-14 flex flex-col  items-center justify-center gap-3 text-center`}
            >
              <img src={achievementBadge} alt="achievementBadge" className="w-fit"/>
              <p className="font-semibold text-xl">{title}</p>
              <p className="text-sm  leading-relaxed">{description}</p>
            </div>

            <div className="h-[40px] w-full bg-primary  bottom-0 rounded-b-[16px] "></div>
            <div className="absolute bottom-5 left-2/4 -translate-x-2/4 bg-white text-black text-2xl font-semibold py-3 px-4 rounded-full">
              {String(index + 1).padStart(2, 0)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
