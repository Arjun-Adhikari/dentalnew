export default function page() {
  return (
    <div>
      <div className="bg-[#2b4859] text-white flex justify-center py-10 text-3xl">
        <h1>Our Services</h1>
      </div>
      <div>
        <div className="font-bold text-2xl flex justify-center py-10 flex-wrap">
          Our Dental Services
        </div>
        <ul className="list-disc flex flex-col pl-10 text-2xl bg-[#f6f6f6] py-4 mb-10">
          <li>Orthodontics/Braces</li>
          <li>Crowns and Bridge</li>
          <li>Endodontics</li>
          <li>Oral and Maxillofacial Surgery</li>
          <li>Pediatric / Kids Dentistry</li>
          <li>Gum Treatment</li>
          <li>Oral Appliances</li>
        </ul>
      </div>
    </div>
  );
}
