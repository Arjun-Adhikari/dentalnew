import BackgroundImg from "./components/Home/BackgroundImg";
import Our_Location from "./components/Home/Our_Location";
import Our_Satisfied_Customers from "./components/Home/Our_Satisfied_Customers";
import Our_Team_Members from "./components/Home/Our_Team_Members";
import Our_Works from "./components/Home/Our_Works";
import Testimonials from "./components/Home/Testimonials";

export default function HOME() {
  return (
    <main>
      <h1 className="sr-only">Swargadwari Dental Care Home – Best Dental Clinic in Birendranagar, Surkhet, Nepal</h1>
      <BackgroundImg />
      <section aria-labelledby="team-heading">
        <Our_Team_Members />
      </section>
      <section aria-labelledby="works-heading">
        <Our_Works />
      </section>
      <section aria-labelledby="stats-heading">
        <Our_Satisfied_Customers />
      </section>
      <section aria-labelledby="location-heading">
        <Our_Location />
      </section>
      <Testimonials />
    </main>
  );
}
