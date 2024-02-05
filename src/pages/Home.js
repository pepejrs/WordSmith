import Features from "../layout/Features";
import Footer from "../layout/Footer";
import Team from "../layout/Team";
import Video from "../layout/Video";

// Mentor name left in Footer.js
// Github link addition left in Team.js
// Video uploading left on Video.js from youtube
// Linking try now button to the corrent route
// WordSmith logo pending in Footer.js
//Feature paragraph left in Feature.js

export default function Home() {
  return (
    <>
      <div class="w-full h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="./images/mainbg.jpg"
          className="absolute -top-48 left-0 min-h-full"
          alt=""
        />
        <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div class="col-span-10">
            <h1 class="text-white font-extrabold text-5xl mb-8">
              <em className="text-amber-200">WordSmith</em>, collaborative
              document system, supported with AI
            </h1>
            <p class="text-stone-100 text-base">
              Create and collaborate on online documents in real time and along
              with genuine AI suggestions.
            </p>
            <button class="group relative uppercase mt-10 h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div class="absolute inset-0 w-3 bg-amber-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-gray-600">
                Try now
                {/* Try Now */}
              </span>
            </button>
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
