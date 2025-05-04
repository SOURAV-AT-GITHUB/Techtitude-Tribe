import appIcon from '/Home/What-we-provide/app.svg'
import webIcon from '/Home/What-we-provide/web.svg'
import uiIcon from '/Home/What-we-provide/ui.svg'
import workshopIcon from '/Home/What-we-provide/workshop.svg'
export default function WhatWeProvide() {
  return (
    <section className="w-full overflow-hidden p-3 py-10 sm:p-10 lg:p-28 bg-light flex flex-col items-center gap-10 sm:gap-20">
        <div className="flex flex-col gap-2 text-center">
            <p className="text-primary font-medium">WHAT WE PROVIDE</p>
            <h4 className="text-3xl md:text-[2.5rem] font-semibold">Look What We Provide</h4>
        </div>
        <div className="grid sm:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2 px-5 py-8 rounded-3xl shadow-xl bg-white border border-slate-200">
                <div className="w-16 h-16 flex justify-center items-center bg-light rounded-full">
                <img src={appIcon} alt="App Development"/></div> 
                <p className="font-semibold text-lg">App Development</p>
                <p className="text-sm">From concept to deployment, we develop tailored mobile and web applications that meet your business&apos;s unique needs.</p>
                <p className="text-sm font-medium text-primary underline cursor-pointer">READ DETAILS</p>
            </div>
            <div className="flex flex-col gap-2 px-5 py-8 rounded-3xl shadow-xl bg-white border border-slate-200">
                <div className="w-16 h-16 flex justify-center items-center bg-light rounded-full">
                <img src={webIcon} alt="App Development"/></div> 
                <p className="font-semibold text-lg">Web Development</p>
                <p className="text-sm">From concept to deployment, we develop tailored mobile and web applications that meet your business&apos;s unique needs.</p>
                <p className="text-sm font-medium text-primary underline cursor-pointer">READ DETAILS</p>
            </div>
            <div className="flex flex-col gap-2 px-5 py-8 rounded-3xl shadow-xl bg-white border border-slate-200">
                <div className="w-16 h-16 flex justify-center items-center bg-light rounded-full">
                <img src={uiIcon} alt="App Development"/></div> 
                <p className="font-semibold text-lg">Creative UI/UX</p>
                <p className="text-sm">From concept to deployment, we develop tailored mobile and web applications that meet your business&apos;s unique needs.</p>
                <p className="text-sm font-medium text-primary underline cursor-pointer">READ DETAILS</p>
            </div>
            <div className="flex flex-col gap-2 px-5 py-8 rounded-3xl shadow-xl bg-white border border-slate-200">
                <div className="w-16 h-16 flex justify-center items-center bg-light rounded-full">
                <img src={workshopIcon} alt="App Development"/></div> 
                <p className="font-semibold text-lg">Workshops & Webinar</p>
                <p className="text-sm">From concept to deployment, we develop tailored mobile and web applications that meet your business&apos;s unique needs.</p>
                <p className="text-sm font-medium text-primary underline cursor-pointer">READ DETAILS</p>
            </div>
        </div>
        <button className="bg-primary text-white text-lg p-3 px-5 rounded-xl">Discover Our Services</button>
    </section>
  )
}
