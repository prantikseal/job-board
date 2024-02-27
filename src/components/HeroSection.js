import PostAJobBtn from "./PostAJobBtn";

const HeroSection = () => {
    return (
      <section className="hero-section mt-12">
        <div className="hero-block text-center flex flex-col justify-center items-center">
          <h1 className="font-medium md:text-6xl text-4xl mb-4 w-full text-slate-900 -tracking-wider">
            Build & ship a job
            <br />
            board fast with Framer
          </h1>
          <p className="font-normal md:text-lg text-md text-center max-w-3xl mb-4">
          Shifter is the largest job directory in the world. With over 2M visitors month, Shifter is the number one destination to find and list incredible jobs for tech industries.
          </p>
          <div className="ads-section">
          <PostAJobBtn />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
