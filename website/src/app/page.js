import Navbar from "./Components/Navbar";
import MasterSection from "./Components/Home";
import Beats from "./Components/Beats";
import Sound from "./Components/Sound";
import SmallCard from "./Components/SmallCard";
import Vacncies from "./Components/Vacncies";
import { Divider } from "@mui/material";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <MasterSection />
      <Beats />
      <Sound />
      <SmallCard />

      {/*2nd Last */}
      <Vacncies />

      <Divider />

      <Footer />
    </main>
  );
}
