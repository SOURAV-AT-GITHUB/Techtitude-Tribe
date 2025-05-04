import appDevelopmentBanner from "/Services/app-development-banner.png";
import points from "/Services/points.svg";
export default function AppDevelopment() {
  const left = [
    "Mobile App Development",
    "Web App Development",
    "Enterprise App Development",
    "E-Commerce App Development",
    "On-Demand App Development",
    "FinTech App Development",
    "Healthcare & Fitness App Development",
  ];
  const right = [
    "Gaming & Entertainment App Development",
    "Education & E-Learning App Development",
    "IoT Device App Development",
    "(AR) & (VR) App Development",
    "Blockchain & Crypto App Development",
    "AI & Machine Learning App Development",
    "Custom App Development",
  ];

  return (
    <section className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-4 gap-x-10 gap-y-6 rounded-2xl overflow-hidden">
      <h3 className="order-1 md:order-2 md:col-span-2 row-span-1 text-2xl md:text-[2.6rem] font-bold self-end ">
        App Development Service
      </h3>
      <p className="order-3 md:order-3 md:col-span-2 row-span-1 leading-7 text-slate-500 ">
        Our Android App Development service provides end-to-end solutions for
        businesses, startups, and individuals looking to build high-performance,
        user-friendly, and scalable Android applications. We specialize in
        custom app development tailored to your needs, ensuring seamless
        functionality, modern UI/UX, and top-notch security. Our services
        includes:
      </p>
      <img
        src={appDevelopmentBanner}
        alt="App Development Banner"
        className="order-2 md:order-1 md:row-span-5 h-full object-cover object-center rounded-xl"
      />
      <ul className="order-4 md:row-span-2 flex flex-col gap-3 p-2">
        {left.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <img src={points} alt="points" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <ul className="order-5 md:row-span-2 flex flex-col gap-3 p-2">
        {right.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <img src={points} alt="points" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
