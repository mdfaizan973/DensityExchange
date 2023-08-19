import Navbar from "./Components/Navbar";
import MasterSection from "./Components/Home";
import Beats from "./Components/Beats";
import Sound from "./Components/Sound";
import SmallCard from "./Components/SmallCard";
export default function Home() {
  return (
    <main>
      <Navbar />
      <MasterSection />
      <Beats />
      <Sound />
      <SmallCard />
    </main>
  );
}
