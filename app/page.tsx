import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MySkills from "./sections/MySkills";
import MySoftSkills from "./sections/MySoftSkills";
import MyWorks from "./sections/MyWorks";
export default function Home() {
  return (
    <>

      <div className="h-screen w-full space-y-3">
        <Navbar/>
        <HeroSection/>
        <MySoftSkills/>
        <MyWorks/>
        <MySkills/>
        <Footer/>
      </div>
    </>
  );
}
