function Download() {
  return (
    <>
      <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
        {/* left */}
        <div className="left order-last lg:order-first md:order-first">
          <video
            src="/video/v2.mp4"
            autoPlay
            muted
            loop
            type="video/mp4"
            className="lg:w-[20em] md:w-[20em] w-[20em]"
          ></video>
        </div>
        {/* Right */}
        <div className="right mb-10 lg:mb-0 md:mb-0 sm:mb-0">
          <h2 className="text-white font-bold lg:text-5xl md:text-5xl text-3xl text-center lg:text-start md:text-start sm:text-start mb-5">
            Download your shows to <br /> watch offline
          </h2>
          <p className="text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start sm:text-start">
            Save your favourites easily and always have <br /> something to
            watch.
          </p>
        </div>
      </div>
      <div className="hr_line"></div>
    </>
  );
}

export default Download;
