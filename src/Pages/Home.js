import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Download from "../Components/Home/Download";
import Tools from "../Components/Home/Tools";
import Trial from "../Components/Home/Trial";
import Member from "../Components/Home/Member";
import Community from "../Components/Home/Community";
import Footer from "../Components/Home/Footer";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Navbar
          btnBg="bg-black"
          btnTxt="text-white"
          btnBorder="border-transparent"
          bg="bg-white"
        />
        <Scene pin>
          <div className="md:h-99 h-98 overflow-hidden relative">
            <Hero />
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Download />
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Tools />
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Trial />
          </div>
        </Scene>
        <Scene pin>
          <div>
            <Member />
          </div>
        </Scene>
        <Timeline pin>
          <Tween from={{ x: "0%" }} to={{ x: "0%" }}>
            <div>
              <Community />
            </div>
          </Tween>
        </Timeline>
        <Scene pin>
          <div>
            <Footer />
          </div>
        </Scene>
      </Controller>
    </div>
  );
};

export default Home;
