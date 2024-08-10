import Image from "next/image";
import Banner from "./component/Home/Banner";
import OurClient from "./component/Home/OurClient";


export default function Home() {
  return (
    <div className=" mt-4  ">
      <Banner/>
      <OurClient/>
    </div>
  );
}
