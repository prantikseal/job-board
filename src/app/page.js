import FeaturedCompanyCard from "@/components/FeaturedCompanyCard";
import FeaturedJobPostCard from "@/components/FeaturedJobPostCard";
import GetRecentJobsList from "@/components/GetRecentJobsList";
import HeroSection from "@/components/HeroSection";
import JobWidget from "@/components/JobWidget";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <div className="jobs-section flex flex-wrap justify-between pt-20 pb-16 lg:px-32 px-0">
        <div className="jobs-list flex flex-col w-full md:w-2/3 md:pr-12 pr-0">
        <button className="search cursor-pointer border border-gray-300 rounded-lg flex items-center text-slate-500 shadow-lg gap-3 px-4 py-4 w-full mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" fill-slate-500 w-4 h-auto"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          Try Searching like Software Engineer
        </button>
          <FeaturedJobPostCard />
          <br />
          <br />
          <GetRecentJobsList />
        </div>
        <div className="ads-section flex flex-col gap-8 w-full md:w-1/3 mt-8 md:mt-0 lg:pl-8 pl-0">
          <JobWidget />
          <FeaturedCompanyCard />
        </div>
      </div>
    </main>
  );
}
