import circlesDesign from "/Other-files/circles.svg";
export default function HeroSection({ id, p1, heading, p2, hasButton }) {
  return (
    <section
      id={id || ''}
      className="relative z-10 w-full p-3 py-10 sm:p-10 lg:p-28 min-h-[75vh] flex items-center overflow-hidden"
    >
      <img
        src={circlesDesign}
        alt={"circlesDesign"}
        className="absolute -left-24 top-16 w-2/8"
      />
      <img
        src={circlesDesign}
        alt={"circlesDesign"}
        className="absolute -right-20 -top-14 w-2/8"
      />
      <div className="flex flex-col gap-4 md:w-2/4 text-white my-auto ">
        <p>{p1 || "Lorem ipsum"}</p>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
          {heading || "Lorem ispsum"}
        </h3>
        <p>{p2 || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}</p>
        {hasButton && (
          <div className="flex gap-3 items-center">
            <button className="bg-secondary rounded-xl p-3">
              Discover More
            </button>
            <button className="rounded-xl p-3 border-2 border-white">
              Contact Us
            </button>
          </div>
        )}
      </div>
      <div className="absolute right-10 -bottom-44 h-full w-28 bg-primary opacity-55 rotate-45"></div>
    </section>
  );
}
