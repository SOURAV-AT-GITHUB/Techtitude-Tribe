import webDevelopmentBanner from "/Services/web-development-banner.png";
import points from "/Services/points.svg";
export default function WebDevelopment() {
  const left = [
    "Frontend Development",
    "Backend Development",
    "Static Website Development",
    "Dynamic Website Development",
    "E-Commerce Development",
    "Content Management System Development",
    "Web Application Development",
  ];
  const right = [
    "Progressive Web App Development",
    "Website Redesign & Maintenance",
    "Web Portal Development",
    "Enterprise Web Development",
    "Custom Web Development",
    "Cloud-Based Web Development",
    "API Development & Integration",
  ];

  return (
    <section className="p-5 md:pl-20 grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-5 gap-x-10 gap-y-6 rounded-2xl overflow-hidden">
      <h3 className="order-1 md:col-span-2 md:row-span-1 text-2xl md:text-[2.6rem] font-bold self-end ">
        Web Development Service
      </h3>
      <p className="order-3 md:col-span-2 md:row-span-1 leading-7 text-slate-500 ">
        Our Web Development Services provide high-quality, scalable, and secure
        web solutions tailored to meet your business needs. Whether you&apos;re
        a startup, enterprise, or individual, we specialize in building
        responsive, fast, and user-friendly websites and web applications. Our
        Services Includes:
      </p>

      <img
        src={webDevelopmentBanner}
        alt="Web Development Banner"
        className="order-2 md:row-span-5 h-full object-cover object-center rounded-xl"
      />
      <ul className="order-4 md:row-span-3 flex flex-col gap-3 p-2">
        {left.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <img src={points} alt="points" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <ul className="order-5 md:row-span-3 flex flex-col gap-3 p-2">
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
