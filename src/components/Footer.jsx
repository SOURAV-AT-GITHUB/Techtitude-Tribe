import { useLocation } from "react-router-dom";
import facebookIcon from "/footer/facebook.svg";
import linkedinIcon from "/footer/linkedin.svg";
import twitterIcon from "/footer/twitter.svg";
export default function Footer() {
  const location = useLocation()
  return (
    <footer className={`bg-secondary p-3 py-10 md:p-10 lg:p-28 ${location.pathname === "/contact-us" && "md:pt-46 lg:pt-52"}`}>
      <div
        id="footer-top"
        className="w-full grid sm:grid-cols-5 justify-between  gap-10"
      >
        <div className="sm:col-span-2 flex flex-col items-center sm:items-start gap-8 ">
          <div className="w-fit ">
            <p className="text-white text-xl">About Company</p>
            <div className="flex items-center">
              <div className="mt-2 w-3/4 h-[1.25px] bg-primary"></div>
              <div className=" mt-2 w-[4px] h-[4px] bg-primary rotate-45"></div>
            </div>
          </div>
          <p className="text-slate-500">
            TechtitudeTribe is a leading IT solutions provider specializing in
            custom application development, website optimization, UI/UX design,
            and educational workshops. We deliver innovative, scalable solutions
            tailored to help businesses thrive in the digital landscape.
          </p>

          <div className="flex gap-3 items-center">
            <img src={facebookIcon} alt={"facebookIcon"} />
            <img src={linkedinIcon} alt={"linkedinIcon"} />
            <img src={twitterIcon} alt={"twitterIcon"} />
          </div>
        </div>

        <div className="empty hidden sm:block"></div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-fit">
            <p className="text-white text-2xl">Navigation</p>
            <div className="flex items-center">
              <div className="mt-2 w-3/4 h-[1.25px] bg-primary"></div>
              <div className=" mt-2 w-[4px] h-[4px] bg-primary rotate-45"></div>
            </div>
          </div>
          <ul className="mt-6 text-slate-500 flex flex-col gap-3">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-fit ">
            <p className="text-white text-2xl">Help</p>
            <div className="flex items-center">
              <div className="mt-2 w-3/4 h-[1.25px] bg-primary"></div>
              <div className=" mt-2 w-[4px] h-[4px] bg-primary rotate-45"></div>
            </div>
          </div>
          <ul className="mt-6 text-slate-500 flex flex-col gap-3">
            <li>FAQ</li>
            <li>Customer Support</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>



    <hr className="my-8 text-slate-500"/>
      <div id="footer-bottom" className="text-center text-slate-500">
<p>2023 © All rights reserved by Techtitude Tribe Services Private Limited</p>
      </div>
    </footer>
  );
}
