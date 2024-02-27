"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const JOB_TOKEN = `ShqzmndKzRu8xwRDxiTkGQqmgTqeVGoC`;
const JOB_URL = `https://web3.career/api/v1`;

const FeaturedJobPostCard = () => {
  const [jobs, setJobs] = useState([]);
  const limit = 3;

  useEffect(() => {
    fetch(`${JOB_URL}?token=${JOB_TOKEN}&limit=${limit}&tag=dev`)
      .then((res) => res.json())

      .then((data) => {
        console.log(data[2]);
        setJobs(data[2]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <div className="recent-jobs-section">
      <h3 className=" text-2xl font-semibold mb-5">Featured Job Posts</h3>
      {jobs.length > 0 ? (
        // animate on hover shadow
        <div className="flex flex-col gap-3 justify-between">
          {jobs?.map((job) => {
            return (
              <Link
                href={`${job.apply_url}`}
                key={job.id}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  key={job.id}
                  className="card p-4 border border-gray-300 border-opacity-50 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <div className="flex gap-4 items-center ">
                    <div className="h-12 min-w-12 rounded-lg text-center bg-slate-600 text-white font-bold flex justify-center items-center">
                      <span className="">
                        {job.company.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="job-details-container flex flex-col md:flex-row md:items-center items-start w-full justify-between">
                    <div className="job-details">
                      <p className="text-sm text-gray-500">{job.company}</p>
                      <p className="font-medium text-lg w-2/3">{job.title}</p>
                    </div>
                    <div className="job-location-and-time">
                      <p className="text-sm text-gray-500">
                        {/* {job.is_remote ? "Remote" : job.location.truncate */}
                        {job.is_remote ? "Remote" : truncate(job.location, 15)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(job.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <Image
          className="mx-auto"
          src="https://i.giphy.com/3oEjI6SIIHBdRxXI40.webp"
          alt="loading"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};

export default FeaturedJobPostCard;
