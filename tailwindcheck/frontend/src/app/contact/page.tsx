export default function page() {
  return (
    <div>
      <div className="bg-[#2b4859] text-white flex justify-center pt-10 pb-8 mb-6 text-2xl md:text-3xl">
        Contact Us
      </div>
      <div className="flex justify-center flex-col lg:flex-row items-center  gap-6">
        <div className="Office_Location border-2 border-[#642ab6] p-4 flex flex-col flex-wrap max-w-60 gap-6 rounded ">
          <div className="flex justify-center flex-col flex-wrap  lg:items-start ">
            <h1 className="font-semibold ">Office</h1>
            <p>Near Maya Nursing Home Birendranagar,Surkhet</p>
          </div>
          <div className="flex justify-center flex-col flex-wrap  lg:items-start">
            <h1 className="font-semibold ">Email</h1>
            <p>Swargadwari@gmail.com</p>
          </div>
          <div className="flex justify-center flex-col flex-wrap  lg:items-start">
            <h1 className="font-semibold ">Phone</h1>
            <p>9843230047</p>
          </div>
          <div className="flex justify-center flex-col flex-wrap  lg:items-start">
            <h1 className="font-semibold ">Opening Hours</h1>
            <p>Everyday (7AM - 7 PM) Emergency Case(24/7)</p>
          </div>
        </div>
        <div className="flex justify-center p-2 pb-10">
          <div className="flex flex-col gap-10">
            <iframe
              className="lg:w-4xl md:w-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.148704734896!2d81.6155984!3d28.5953154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a28590881b7405%3A0x9db87a65faae4b3e!2sSwargadwari%20dental%20care%20home!5e0!3m2!1sen!2snp!4v1772707491593!5m2!1sen!2snp"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
