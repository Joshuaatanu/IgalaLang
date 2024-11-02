import Image from "next/image";
import FileUpload from "./components/FileUpload";
import Navbar from "./components/Navbar";
import SyntheticDataGenerator from "./components/SyntheticDataGenerator";
import TranslationPOS from "./components/TranslationPOS";
import GuideSection from "./components/GuideSelection";

export default function Home() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <header className="App-header">
        <h1>POS Tagging Application</h1>
      </header> */}
      <div className='bg-[url("../public/images/Rectangle.PNG")] w-full bg-cover h-[156px]'>
        <Navbar />

        <div className="flex justify-center items-center space-x-40 px-10 py-10">
          <h3 className="text-[24px]">Learn Igala</h3>
          <button className="px-8 py-3 bg-purple-400 text-purple-900">
            Get started
          </button>
        </div>

        <section className="flex flex-col items-center justify-center space-y-20 ">
          <div className="flex space-x-28">
            <GuideSection
              buttonText="Watch now"
              title="Language Guide"
              description="Learn the basics of Igala Pronunciation"
            />
            <GuideSection
              buttonText="Build now"
              title="Vocabulary Builder"
              description="Explore  your Igala vocabulary with useful words and phrases"
            />
          </div>
          <div className="flex space-x-20">
            <GuideSection
              buttonText="Watch now"
              title="Grammer Basics"
              description="Practice speaking Igala with Conversational Phrases"
            />
            <GuideSection
              buttonText="Watch now"
              title="Conversational Igala"
              description="Learn the basics of Igala Pronunciation"
            />
          </div>
        </section>
      </div>
      {/* <FileUpload />
      <div>
        <SyntheticDataGenerator />
      </div>
      <div>
        <TranslationPOS />
      </div> */}
    </div>
  );
}
