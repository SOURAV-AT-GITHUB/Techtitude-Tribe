import webinarBanner from "/Services/webinar-banner.png";
import points from "/Services/points.svg";
// export default function WorkshopsAndWebinars() {
  const left = [
    "Technical & IT Training",
    "Business & Leadership",
    "Digital Marketing & Branding",
    "UI/UX & Design Training",
    "Personal Development & Soft Skills",
  ];
  const right = [
    "Finance & Investment",
    "Industry-Specific Training",
    "Corporate Training & Team-Building",
    "Creative & Innovation",
    "Health & Wellness",
  ];
  const workshopWebinarItems = [
    "Technical & IT Training",
    "Digital Marketing & Branding",
    "UI/UX & Design Training",
    "Industry-Specific Training",
    "Corporate Training & Team-Building",
    "Creative & Innovation",
  ]
  return (
    <section className="bg-white p-5 md:pl-20 grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-4 gap-x-10 gap-y-6 rounded-2xl overflow-hidden">
      <h3 className="order-1 md:col-span-2 md:row-span-1 text-2xl md:text-[2.6rem] font-bold self-end ">
        Workshops & Webinars
      </h3>
      <p className="order-3 md:col-span-2 md:row-span-1 leading-7 text-slate-500 ">
        Our Workshops & Webinars provide hands-on learning experiences designed
        to enhance skills, foster innovation, and empower professionals across
        various industries. Whether you&apos;re looking for technical training,
        business growth strategies, or creative skill development, we offer
        engaging, expert-led sessions tailored to your needs.
      </p>

      <img
        src={webinarBanner}
        alt="Webinar and Workshop Banner"
        className="order-2 md:row-span-4 h-full object-cover object-center rounded-xl"
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
