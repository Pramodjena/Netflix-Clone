function Watch() {
  return (
    <>
      <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
        {/* left */}
        <div className="left mb-10 lg:mb-0 md:mb-0 sm:mb-0">
          <h2 className="text-white font-bold lg:text-5xl md:text-5xl text-3xl text-center lg:text-start md:text-start sm:text-start mb-5">
            Watch everywhere
          </h2>
          <p className="text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start sm:text-start">
            Stream unlimited movies and TV shows on your <br /> phone, tablet,
            laptop, and TV.
          </p>
        </div>
        {/* Right */}
        <div className="right">
          <video
            src="/video/v3.mp4"
            autoPlay
            muted
            loop
            type="video/mp4"
            className="lg:w-[35em] md:w-[35em] w-[30em]"
          ></video>
        </div>
      </div>
      <div className="hr_line"></div>
    </>
  );
}

export default Watch;
