import type { NextPage } from "next";
import LeftBackground from "../components/LeftBackground";
import RightScreen from "../components/RightScreen";
const Home: NextPage = () => {
  return (
    <div className="flex">
      <LeftBackground />
      <RightScreen />
    </div>
  );
};

export default Home;
