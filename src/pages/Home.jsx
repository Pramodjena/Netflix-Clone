import CreateProfile from "../components/CreateProfile";
import Download from "../components/Download";
import Enjoy from "../components/Enjoy";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Watch from "../components/Watch";
import { faqData } from "../data/faqData";

function Home() {
  return (
    <div>
      <HeroSection />
      <Enjoy />
      <Download />
      <Watch />
      <CreateProfile />
      <div className="faq">
        <h2 className="text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold py-10">
          Frequently Asked <br className="lg:hidden md:hidden sm:hidden" />
          Questions
        </h2>
        <div className="">
          {faqData.map((items, index) => {
            const { title, desc } = items;
            return <Faq key={index} title={title} desc={desc} />;
          })}
        </div>
        <div className="Email lg:mb-16 md:mb-16 mb-10">
          <p className="text-white text-center lg:text-xl md:text-xl text-lg mb-5">
            Ready to watch? Enter your email to
            <br className="lg:hidden md:hidden sm:hidden" />
            create or restart your membership
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <input
              type="text"
              placeholder="Email address"
              className="bg-[#1d1e1e] text-white text-lg px-3 py-3 lg:w-96 md:w-96 w-80 mb-5 lg:mb-0 md:mb-0 outline-none border border-gray-300 hover:ring-1 hover:ring-gray-50 rounded-lg opacity-80"
            />
            <button
              type="button"
              className="flex items-center text-white bg-[#e50815] hover:bg-[#d80c1a] rounded-lg px-5 py-3 gap-2 text-xl font-bold "
            >
              <p>Get Started</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hr_line"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
