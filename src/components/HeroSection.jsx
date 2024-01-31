import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <div
        className="lg:h-[44.5em] md:h-[44em] h-[34em]"
        style={{
          background:
            "linear-gradient(80deg,black,transparent),url(https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        }}
      >
        <Navbar />
        {/* HeroSection */}
        <div className="hero_section flex mx-auto justify-center items-center h-96">
          <div className="">
            <h1 className="text-white text-center text-3xl px-5 md:text-5xl lg:text-5xl font-bold mb-5">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-white text-center lg:text-2xl md:text-2xl text-xl mb-5">
              Watch anywhere. Cancel anytime.
            </p>
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
        </div>
      </div>
      <div className="hr_line"></div>
    </>
  );
}

export default HeroSection;
