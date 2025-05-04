import image1 from "/Home/Expertise/img1.png";
import image2 from "/Home/Expertise/img2.png";
import image3 from "/Home/Expertise/img3.png";
import image4 from "/Home/Expertise/img4.png";
export default function OurExpertise() {
  const expertise = [
    {
      text: "Languages",
      image: image1,
    },
    {
      text: "Database",
      image: image2,
    },
    {
      text: "Framework",
      image: image3,
    },
    {
      text: "Cloud",
      image: image4,
    },
  ];
  return (
    <section id="our-expertise" className="bg-light p-3 py-10 sm:p-10 lg:p-28 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-primary font-medium">EXPERTISE</p>
        <p className="text-[2.5rem] font-semibold  ">Our Expertise</p>
        <p className="md:w-2/3 text-slate-500">
          At Techtitude Tribe, we leverage the latest technologies to build
          robust, scalable, and secure solutions. Our team is proficient in a
          wide range of cutting-edge technologies across different domains,
          ensuring that your business gets the right tools to succeed.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-1 rounded-xl overflow-hidden">
        {expertise.map((item) => (
          <div className="relative min-h-[300px]" key={item.text}>
            <img src={item.image} alt={item.text} className="h-full object-cover "/>
            <div className="absolute bottom-0 left-0 p-4 w-full bottom-black-bg flex items-center gap-2">
                <div className="h-full min-h-8 w-3 bg-primary"></div>
                <p className="text-white ">

              {item.text}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
