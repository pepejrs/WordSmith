import { Link } from "react-router-dom";
import Features from "../layout/Features";
import Footer from "../layout/Footer";
import Team from "../layout/Team";
import Video from "../layout/Video";

// Mentor name left in Footer.js --Done
// Github link addition left in Team.js --Done
// Video uploading left on Video.js from youtube
// Linking try now button to the corrent route ---Done
// WordSmith logo pending in Footer.js --Done
//Feature paragraph left in Feature.js
// add profile icon in navbar
// check table  size issue in mydocuments

export default function Home() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="./images/mainbg.jpg"
          className="absolute -top-48 left-0 min-h-full"
          alt=""
        />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-10">
            <h1 className="text-white font-extrabold text-5xl mb-8">
              <em className="text-amber-200">WordSmith</em>, collaborative
              document system, supported with AI
            </h1>
            <p className="text-stone-100 text-base">
              Create and collaborate on online documents in real time and along
              with genuine AI suggestions.
            </p>
            <Link to={"/users/login"}><button className="group relative uppercase mt-10 h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-amber-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-gray-600">
                Try now
                {/* Try Now */}
              </span>
            </button></Link>
          </div>
        </div>
      </div>
      <Features />
      <Video />
      <Team />
      <Footer />
    </>
  );
}
