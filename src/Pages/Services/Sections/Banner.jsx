import inquiryIcon from '/Other-files/inquiry.svg'
export default function Banner() {
  return (
    <section className="bg-secondary w-full p-6 sm:p-10 lg:px-20 rounded-2xl flex flex-col md:flex-row items-center gap-10 md:gap-20 z-10">
        <div className="md:w-2/4  flex justify-between gap-4">
        <div className="w-4  bg-primary rounded-full"></div>
        <p className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug">

        To make requests for further information, contact us
        </p>
        </div>
        <div className="md:w-2/4 flex flex-col items-center gap-3">
        <img src={inquiryIcon} alt="inquiryIcon" />
        <p className='text-white text-lg font-light'>Call Us For Any inquiry</p>
        <p className='text-primary font-bold text-xl lg:text-4xl tracking-wide'>+91 6397213673</p>
        </div>
    </section>
  )
}
