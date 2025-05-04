import HeroSection from "../../components/HeroSection";
import PhoneIcon from "/Contact-Us/phone.svg";
import MailIcon from "/Contact-Us/mail.svg";
import LocationIcon from "/Contact-Us/location.svg";
import SmallMailIcon from "/Contact-Us/small-mail.svg";
export default function ContactUs() {
  return (
    <main>
      <HeroSection
        id={"contactus-hero-section"}
        p1={"GET IN TOUCH"}
        heading={"Contact Us"}
        p2={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
        hasButton={false}
      />
      <section className="relative min-h-[85vh] lg:min-h-[110vh] bg-light flex flex-col gap-10 p-4 md:p-14 lg:p-20 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="lg:min-h-[300px] w-full max-w-[350px] bg-[#E5E5E5] flex flex-col justify-center items-center gap-4 p-5 rounded-xl shadow-lg">
            <div className=" bg-light p-5 rounded-full">
              <img src={PhoneIcon} alt="Give us call" />
            </div>
            <p className="font-semibold text-lg">Give Us Call</p>
            <div className="flex flex-col items-center text-slate-600">
              <p>+91 6397213673</p>
              <p>+91 7078307134</p>
            </div>
          </div>

          <div className="lg:min-h-[300px] w-full max-w-[350px] bg-[#E5E5E5] flex flex-col justify-center items-center gap-4 p-5 rounded-xl shadow-lg">
            <div className=" bg-light p-5 rounded-full">
              <img src={MailIcon} alt="Drop Us a Line" />
            </div>
            <p className="font-semibold text-lg">Drop Us a Line</p>
            <div className="flex flex-col items-center text-slate-600">
              <p>info@techwix-theme.com</p>
              <p>mail@techwix-tech.com</p>
            </div>
          </div>

          <div className="lg:min-h-[300px] w-full max-w-[350px] bg-[#E5E5E5] flex flex-col justify-center items-center gap-4 p-5 rounded-xl shadow-lg">
            <div className=" bg-light p-5 rounded-full">
              <img src={LocationIcon} alt="Visit Our Office" />
            </div>
            <p className="font-semibold text-lg">Visit Our Office</p>
            <div className="flex flex-col items-center text-slate-600">
              <p>New York. 112 W 34th St</p>
              <p>caroline, USA</p>
            </div>
          </div>
        </div>




        <div className="md:absolute md:left-2/4 md:-translate-x-2/4 -bottom-34 min-w-[70vw] max-w-full
         bg-primary text-white text-center flex flex-col items-center gap-6 p-3 md:p-8 lg:p-14 rounded-lg">
          <p>REQUEST A QUOTE</p>
            <h3 className="text-3xl font-semibold">How May We Help You!</h3>
          <form action="" className="grid  sm:grid-cols-2 sm:grid-rows-5 gap-5 w-full ">
            <input type="text" placeholder="First name" className="border border-slate-400 rounded-md p-2 outline-0" />
            <input type="text" placeholder="Last name" className="border border-slate-400 rounded-md p-2 outline-0" />
            <div className="flex items-center gap-2 border border-slate-400 rounded-md p-2">
              <img src={SmallMailIcon} alt="mail" />
              <input type="text" placeholder="Your email" className="outline-0"/>
            </div>
            <div className="flex items-center gap-2 border border-slate-400 rounded-md p-2">
              <select className="border-r pr-1">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input type="text" placeholder="Phone Number" className="outline-0"/>
            </div>
            <input type="text" placeholder="How can we help ?" className="sm:col-span-2 border border-slate-400 rounded-md p-2 row-span-2 outline-0"/>
            <button type="submit" className="sm:col-span-2 bg-white text-black p-2">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}
