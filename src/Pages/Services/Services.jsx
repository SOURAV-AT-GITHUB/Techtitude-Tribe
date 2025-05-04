import HeroSection from "../../components/HeroSection";

// import AppDevelopment from "./Sections/AppDevelopment";
// import WebDevelopment from "./Sections/WebDevelopment";
import Banner from "./Sections/Banner";
// import UIUXDesign from "./Sections/UIUXDesign";
// import WorkshopsAndWebinars from "./Sections/WorkshopsAndWebinars";
import Testimonials from "./Sections/Testimonials";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import appDevelopmentBanner from "/Services/app-development-banner.png";
import webDevelopmentBanner from "/Services/web-development-banner.png";
import WorkshopWebinarBanner from "/Services/webinar-banner.png";
import UIUXDesignBanner from "/Services/ui-ux-design-banner.png";
import points from "/Services/points.svg";
export default function Services() {
  const appDevelopmentItems = [
    "Enterprise App Development",
    "E-Commerce App Development",
    "FinTech App Development",
    "Healthcare & Fitness App Development",
    "Gaming & Entertainment App Development",
    "Education & E-Learning App Development",
    "IoT Device App Development",
  ];
  const webDevelopmentItems = [
    "Frontend Development",
    "Backend Development",
    "Static Website Development",
    "Dynamic Website Development",
    "E-Commerce Development",
    "Website Redesign & Maintenance",
    "API Development & Integration",
  ];
  const uiUxItems = [
    "UX Research & Strategy",
    "UI (User Interface) Design",
    "Wireframing & Prototyping",
    "UX (User Experience) Design",
    "Web & Mobile App UI/UX Design",
    "E-Commerce UI/UX Design",
    "Branding & Design Systems",
  ];
  const workshopWebinarItems = [
    "Technical & IT Training",
    "Digital Marketing & Branding",
    "UI/UX & Design Training",
    "Industry-Specific Training",
    "Corporate Training & Team-Building",
    "Creative & Innovation",
  ];
  return (
    <main>
      <HeroSection
        id={"services-hero-section"}
        p1={"SERVICES"}
        heading={"Our Services"}
        p2={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        hasButton={false}
      />

      <section className="relative bg-light flex flex-col gap-10 pt-8 md:p-8 lg:p-12 xl:p-14  2xl:pt-20 2xl:px-16">
        <Timeline position="alternate" className="gap-y-26 ">
          <TimelineConnector
            sx={{
              width: "0px",
              height: "110%",
            }}
            className="absolute left-6 md:left-2/4 md:-translate-x-2/4 -top-5  border border-dashed border-primary opacity-40"
          />

          {/* App development */}
          <TimelineItem className="relative gap-4 md:gap-20 flex flex-col md:flex-row">
            <TimelineOppositeContent>
              <img
                src={appDevelopmentBanner}
                alt="App Development Banner"
                className=" h-full w-full object-cover object-center rounded-xl"
              />
            </TimelineOppositeContent>
            {/* <TimelineSeparator sx={{ border: "none" }}> */}
              <TimelineDot
                sx={{ bgcolor: "transparent", boxShadow: "none" }}
                className="absolute z-10  -left-5 md:left-2/4 md:-translate-x-2/4 top-2/4 -translate-y-2/4 w-[60px] h-[60px]"
              >
                <p className="bg-primary text-xl font-semibold tracking-widest rounded-full h-full w-full p-2 flex items-center justify-center">
                  01
                </p>
              </TimelineDot>
            {/* </TimelineSeparator> */}
            <TimelineContent className="flex flex-col gap-4 items-start">
              <h3 className=" text-2xl md:text-[2.6rem] font-bold ">
                App Development Service
              </h3>
              <p className="md:leading-7 text-slate-500 ">
                Our Android App Development service provides end-to-end
                solutions for businesses, startups, and individuals looking to
                build high-performance, user-friendly, and scalable Android
                applications. Our services includes:
              </p>
              <ul className="flex flex-col gap-4 md:p-2">
                {appDevelopmentItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <img src={points} alt="points" />
                    <p className="text-sm sm:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>

          {/* Web development */}
          <TimelineItem className="relative gap-4 md:gap-20 flex !flex-col md:!flex-row-reverse">
            <TimelineOppositeContent className="flex flex-col gap-4 items-end">
              <img
                src={webDevelopmentBanner}
                alt="Web Development Banner"
                className="h-full object-cover object-center rounded-xl"
              />
            </TimelineOppositeContent>
            <TimelineSeparator sx={{ border: "none" }}>
              <TimelineDot
                sx={{ bgcolor: "transparent", boxShadow: "none" }}
                className="absolute z-10  -left-5 md:left-2/4 md:-translate-x-2/4 top-2/4 -translate-y-2/4 w-[60px] h-[60px]"
              >
                <p className="bg-primary text-xl font-semibold tracking-widest rounded-full h-full w-full p-2 flex items-center justify-center">
                  02
                </p>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className="flex flex-col gap-4 items-start">
              <h3 className="text-2xl md:text-[2.6rem] font-bold text-left">
                Web Development Service
              </h3>
              <p className="leading-7 text-slate-500 text-left">
                Our Web Development Services provide high-quality, scalable, and
                secure web solutions tailored to meet your business needs. Our
                Services Includes:
              </p>
              <ul className=" flex flex-col gap-4 md:p-2 w-full h-full">
                {webDevelopmentItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <img src={points} alt="points" />
                    <p className="text-sm sm:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>

          {/* Banner Timeline Item  */}
          <TimelineItem>
            <Banner />
          </TimelineItem>
          {/* UI UX Design */}

          <TimelineItem className="relative gap-4 md:gap-20 flex !flex-col-reverse md:!flex-row-reverse">
            <TimelineOppositeContent
              className="flex flex-col gap-4 items-start"
              sx={{ position: "relative" }}
            >
              <h3 className="text-2xl md:text-[2.6rem] font-bold">
                Creative UI/UX Design
              </h3>
              <p className="leading-7 text-slate-500 ">
                Our UI/UX Design Services focus on creating visually stunning,
                intuitive, and user-friendly digital experiences. Our service
                includes:
              </p>

              <ul className="flex flex-col gap-4 md:p-2">
                {uiUxItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <img src={points} alt="points" />
                    <p className="text-sm sm:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </TimelineOppositeContent>
            <TimelineSeparator sx={{ border: "none" }}>
              <TimelineDot
                sx={{ bgcolor: "transparent", boxShadow: "none" }}
                className="absolute z-10  -left-5 md:left-2/4 md:-translate-x-2/4 top-2/4 -translate-y-2/4 w-[60px] h-[60px]"
              >
                <p className="bg-primary text-xl font-semibold tracking-widest rounded-full h-full w-full p-2 flex items-center justify-center">
                  03
                </p>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className="flex flex-col gap-4 items-start">
              <img
                src={UIUXDesignBanner}
                alt="UI UX Design Banner"
                className="h-full object-cover object-center rounded-xl"
              />
            </TimelineContent>
          </TimelineItem>

          {/* Workshop and webinar */}

          <TimelineItem className="relative gap-4 md:gap-20 flex !flex-col-reverse md:!flex-row">
            <TimelineOppositeContent className="relative flex flex-col gap-4">
              <h3 className="text-left text-2xl md:text-[2.6rem] font-bold">
                Workshops & Webinars
              </h3>
              <p className="text-left leading-7 text-slate-500">
                Our Workshops & Webinars provide hands-on learning experiences
                designed to enhance skills, foster innovation, and empower
                professionals across various industries.
              </p>
              <ul className=" flex flex-col gap-4 md:p-2 w-full h-full">
                {workshopWebinarItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <img src={points} alt="" />
                    <p className="text-sm sm:text-base text-left">{item}</p>
                  </li>
                ))}
              </ul>
            </TimelineOppositeContent>
            <TimelineSeparator sx={{ border: "none" }}>
              <TimelineDot
                sx={{ bgcolor: "transparent", boxShadow: "none" }}
                className="absolute z-10  -left-5 md:left-2/4 md:-translate-x-2/4 top-2/4 -translate-y-2/4 w-[60px] h-[60px]"
              >
                <p className="bg-primary text-xl font-semibold tracking-widest rounded-full h-full w-full p-2 flex items-center justify-center">
                  04
                </p>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <img
                src={WorkshopWebinarBanner}
                alt="Web Development Banner"
                className="h-full object-cover object-center rounded-xl"
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
      <Testimonials />
    </main>
  );
}
