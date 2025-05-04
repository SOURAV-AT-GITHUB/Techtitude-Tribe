import UIUXDesignBanner from "/Services/ui-ux-design-banner.png";
import points from "/Services/points.svg";
export default function UIUXDesign() {
  const left = [
    "UX Research & Strategy",
    "UI (User Interface) Design",
    "Wireframing & Prototyping",
    "UX (User Experience) Design",
    "Web & Mobile App UI/UX Design",
    "Interaction & Motion Design",
  ];
  const right = [
    "Dashboard & Data Visualization Design",
    "E-Commerce UI/UX Design",
    "Enterprise UX Design",
    "Branding & Design Systems",
    "Accessibility & Inclusive Design",
    "Usability Testing & UX Audit",
  ];

  return (
    <section className="bg-white p-5 md:pr-20 grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-4 gap-x-10 gap-y-6 rounded-2xl overflow-hidden">
      <h3 className="order-1 md:order-2 md:col-span-2 row-span-1 text-2xl md:text-[2.6rem] font-bold self-end ">
        Creative UI/UX Design
      </h3>
      <p className="order-3 md:order-3 md:col-span-2 row-span-1 leading-7 text-slate-500 ">
        Our UI/UX Design Services focus on creating visually stunning,
        intuitive, and user-friendly digital experiences. We combine creativity
        with usability to design interfaces that engage users, enhance
        functionality, and drive business success. Whether it&apos;s a website,
        mobile app, or enterprise software, we ensure a seamless and enjoyable
        user journey. Our service includes:
      </p>
      <img
        src={UIUXDesignBanner}
        alt="UI UX Design Banner"
        className="order-2 md:order-1 md:row-span-4 h-full object-cover object-center rounded-xl"
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
