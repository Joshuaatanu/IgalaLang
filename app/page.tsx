import Image from "next/image";
import FileUpload from "./components/FileUpload";
import Navbar from "./components/Navbar";
import SyntheticDataGenerator from "./components/SyntheticDataGenerator";
import TranslationPOS from "./components/TranslationPOS";
import GuideSection from "./components/GuideSelection";

export default function Home() {
  // // '#menu' is the toggle button id
  // const navBtn = document.querySelector("#menu");
  // // 'menubar' is the navbar
  // const menuBar = document.querySelector('[role="menubar"]');

  // navBtn.addEventListener("click", () => {
  //   // does 'isExpanded' have an aria-expanded?
  //   const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  //   navBtn.setAttribute("aria-expanded", !isExpanded);
  //   menuBar.classList.toggle("hidden");
  //   menuBar.classList.toggle("flex");
  // });

  return (
    <div className="App">
      {/* Background Section */} <Navbar />
      {/* <div className="bg-[url('/images/Rectangle.PNG')] w-full bg-cover h-[156px]">
        <div className="flex justify-center items-center space-x-40 px-10 py-10">
          <h3 className="text-2xl font-semibold">Learn Igala</h3>
          <button className="px-8 py-3 bg-purple-400 text-purple-900 rounded-md hover:bg-purple-500">
            Get started
          </button>
        </div>
      </div> */}
      <div className="w-full bg-cover flex justify-center items-center h-[600px] bg-[url('../hero-home.png')]">
        <h3 className="text-center text-[64px] font-bold">
          Translate.
          <span className="animate-pulse bg-gradient-to-r from-[#265448] via-[#b84e4e] to-[#326a40] bg-clip-text text-transparent">
            Communicate.
          </span>
          Connect.
        </h3>
      </div>
      <section className="px-8 mx-auto justify-center space-x-10 lg:flex-row flex-col flex mb-7">
        <div className="text-[20px]">
          <p className="lg:w-[411px] h-auto lg:mb-8 mt-8">
            Unlock the power of communication with our state-of-the-art
            translation app. Whether you're traveling, working, or connecting
            with friends, TransLingua
          </p>
          <p className="w-[411px] h-auto">
            provides instant, accurate translations in over 100 languages. Join
            millions of users in making the world a more connected place.
          </p>
        </div>
        <div className="flex mt-[20px] lg:ml-[60px]">
          {" "}
          {/* Consider using responsive units instead of fixed ml-[750px] */}
          <h3 className="text-[48px] font-bold">
            Break Language <br />
            Barrers with <br />
            ease
          </h3>
        </div>
      </section>
      <div className="px-8 w-full overflow-hidden">
        {" "}
        <div className="px-8 w-full overflow-x-hidden">
          {" "}
          {/* Added overflow-x-hidden */}
          <div className="animate-infinite-scroll whitespace-nowrap">
            {" "}
            {/* whitespace-nowrap on parent */}
            <ul className="flex items-center gap-2 font-bold lg:text-[60px] text-[30px]">
              {/* Removed justify-center/md:justify-start, whitespace-nowrap from ul */}
              {[
                "òdùdu",
                "ọ̀rọ́ka",
                "náàgò",
                "ù ùfẹ̀dọ̀ mi Íye",
                "ù ódú dú a gbíkó ónẹ́kẹ̀lẹ̀",
                "ù enẹ méjì àmọ́maye",
                "Igala Translationù ùfẹ̀dọ̀ fufu bishoff pudding",
              ].map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <section className="flex flex-col items-center justify-center space  container mx-auto">
        <div className="flex space-">
          <GuideSection
            buttonLink="https://play.google.com/books/reader?id=j5boBwAAQBAJ&pg=GBS.PA2000"
            title="Language Guide"
            description="Learn the basics of Igala Pronunciation"
            buttonText="Watch now"
            // imageUrl="/images/language-guide.png"
            className="mt-10"
          />
          <GuideSection
            buttonLink="/pos_tag"
            title="Vocabulary Builder"
            description="Explore your Igala vocabulary with useful words and phrases"
            buttonText="Build now"
            // imageUrl="/images/vocabulary-builder.png"
            className="mt-10"
          />
        </div>
        {/* Second Row */}
        <div className="flex">
          <GuideSection
            buttonLink="/tranlate"
            title="Translate Igala"
            description="a simple English to Igala Translator on demand "
            buttonText="Learn now"
            // imageUrl="/images/grammar-basics.png"
          />
          <GuideSection
            buttonLink="/gen_ai"
            title="Conversational IgalaAI"
            description="Learn to communicate effectively in Igala"
            buttonText="Practice now"
            // imageUrl="/images/conversational-igala.png"
          />
        </div>
      </section>
    </div>
  );
}
