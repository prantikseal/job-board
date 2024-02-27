import FeaturedCompanyCard from "@/components/FeaturedCompanyCard";
import GetRecentJobsList from "@/components/GetRecentJobsList";
import HeroSection from "@/components/HeroSection";
import JobWidget from "@/components/JobWidget";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <div className="jobs-section flex flex-wrap justify-between pt-20 pb-16">
        <div className="jobs-list flex w-full md:w-2/3">
          <GetRecentJobsList />
        </div>
        <div className="ads-section flex flex-col gap-8 w-full md:w-1/3 mt-8 md:mt-0">
          <JobWidget />
          <FeaturedCompanyCard />
        </div>
      </div>
    </main>
  );
}
