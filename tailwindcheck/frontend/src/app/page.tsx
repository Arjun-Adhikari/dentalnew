import BackgroundImg from "./components/Home/BackgroundImg";
import Our_Location from "./components/Home/Our_Location";
import Our_Satisfied_Customers from "./components/Home/Our_Satisfied_Customers";
import Our_Team_Members from "./components/Home/Our_Team_Members";
import Our_Works from "./components/Home/Our_Works";

export default function HOME() {
  return (
    <>
      <BackgroundImg />
      <Our_Team_Members />
      <Our_Works />
      <Our_Satisfied_Customers />
      <Our_Location />
    </>
  );
}
