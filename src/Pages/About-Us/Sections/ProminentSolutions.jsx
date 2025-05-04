export default function ProminentSolutions() {
  return (
    <section className="relative w-full bg-[#D4D3D3] p-3 py-10 sm:p-10 lg:p-28 grid sm:grid-cols-2 gap-10 lg:gap-20">

      <div className="flex flex-col gap-3">
        <p className="text-primary">PROMINENT SOLUTIONS</p>
        <p className="text-4xl font-bold leading-tight ">
          Preparing for your success, we provide truly prominent IT solutions
        </p>
        <ul className="flex flex-col gap-3 mt-3">
          <li className="flex gap-2">
            <div className="flex items-center">
                <div className="w-3 h-[1.5px] bg-primary "></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-slate-500 font-medium">We always focus on technical excellence</p>
          </li>
          <li className="flex gap-2">
            <div className="flex items-center">
                <div className="w-3 h-[1.5px] bg-primary "></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-slate-500 font-medium">Wherever you’re going, we bring ideas and excitement</p>
          </li>
          <li className="flex gap-2">
            <div className="flex items-center">
                <div className="w-3 h-[1.5px] bg-primary "></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-slate-500 font-medium">We’re consultants, guides, and partners for brands</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-slate-500 md:font-medium leading-loose">
          Accelerate innovation with world-class tech teams We’ll match you to
          an entire remote team of incredible freelance talent for all your
          software development needs. building cloud, infrastructure, network,
          etc. We put a strong focus on the needs of your business to figure out
          solutions that best fits your demand and nail it
        </p>
        <div className="flex flex-col gap-8">

            <div className="w-[80%] flex flex-col gap-3">
                <div className="flex justify-between ">
                    <p className="font-medium">IT Management</p>
                    <p className="font-medium">80%</p>
                </div>
                <div className="w-full h-2 bg-primary"></div>
            </div>

            <div className="w-[95%] flex flex-col gap-3">
                <div className="flex justify-between ">
                    <p className="font-medium">Data Security</p>
                    <p className="font-medium">95%</p>
                </div>
                <div className="w-full h-2 bg-primary"></div>
            </div>

            <div className="w-[80%] flex flex-col gap-3">
                <div className="flex justify-between ">
                    <p className="font-medium">Information Technology</p>
                    <p className="font-medium">80%</p>
                </div>
                <div className="w-full h-2 bg-primary"></div>
            </div>



        </div>
      </div>
    </section>
  );
}
