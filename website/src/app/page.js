import Navbar from "./Components/Navbar";
import MasterSection from "./Components/Home";
import Beats from "./Components/Beats";
import Sound from "./Components/Sound";
import SmallCard from "./Components/SmallCard";
import Vacncies from "./Components/Vacncies";
import { Divider } from "@mui/material";
import Footer from "./Components/Footer";
import EqBeast from "./Components/EqBeast";
import GetStarted from "./Components/GetStarted";
import MeetAhead from "./Components/MeetAhead";
import SelfImprove from "./Components/SelfImprove";
import Wondered from "./Components/Wondered";
export default function Home() {
  return (
    <main>
      <Navbar />
      <MasterSection />
      <Beats />
      <Sound />
      <SmallCard />
      <MeetAhead />
      <SelfImprove />
      <EqBeast />
      <Wondered />

      <GetStarted />
      <Vacncies />

      <Divider />

      <Footer />
    </main>
  );
}
