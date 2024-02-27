import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostAJobHero = () => {
  return (
    <div className=" lg:px-44 xl:mb-12 px-4 mb-12">
      <h1 className=" md:mt-28 mt-4 font-medium md:text-6xl text-4xl mb-10 w-full text-slate-900 -tracking-wider">
        Post A Job
      </h1>
      <p className="font-normal md:text-lg text-md max-w-xl mb-24">
        Shifter is the largest job directory in the world. With over 2M visitors
        month, Shifter is the number one destination.
      </p>
      <div className="post-a-job-container flex flex-wrap">
        <section className="post-a-job-form md:w-1/2 w-full md:pr-5 pr-0">
          <form action="submit" className="flex flex-col gap-4">
            <div className="name-email-section flex gap-4">
              <div className="form-group w-full">
                <input
                  type="text"
                  className="bg-opacity-50 bg-gray-300 rounded-lg outline-none w-full p-4"
                  id="name"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="form-group w-full">
                <input
                  type="text"
                  id="email"
                  className="bg-opacity-50 bg-gray-300 rounded-lg outline-none w-full p-4 flex-1"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="job-details"
                id="job-details"
                cols="30"
                rows="10"
                className="bg-opacity-50 bg-gray-300 rounded-lg outline-none w-full p-4"
                placeholder="Job Details"
              ></textarea>
            </div>
            <button className="bg-black px-8 py-5 w-full text-white font-normal rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
              Post this Job
            </button>
          </form>
        </section>
        <div className="post-a-job-content md:w-1/2 w-full md:pl-5 pl-0 md:mt-0 mt-5">
          <div className="bg-opacity-50 bg-gray-300 rounded-lg p-5 flex flex-col justify-center">
            <h3 className="font-semibold text-2xl mb-2">How does it work?</h3>
            <div className="mb-6">
  <ul className="">
    <li className="flex items-start mb-2 flex-wrap gap-2">
      <Image
        src="/point.png"
        alt="loading"
        width={15}
        height={15}
        className="mr-2"
      />We’ll review your job post within 24 hours.
    </li>
    <li className="flex items-start mb-2 gap-2">
      <Image
        src="/point.png"
        alt="loading"
        width={15}
        height={15}
        className="mb-1"
      />
      If the job post is appropriate, we’ll instantly publish it on our website.
    </li>
    <li className="flex items-start flex-wrap">
      <Image
        src="/point.png"
        alt="loading"
        width={15}
        height={15}
        className="mr-2"
      />
      <span className="flex flex-col">
        You need to write a job post like this:{" "}
        <Link href="#" className='cursor-pointer underline' target="_blank">
        https://shifter.co/jobs/sample
        </Link>
      </span>
    </li>
  </ul>
  <p className="mt-4">
    Kindly follow this post description as a standard.
  </p>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAJobHero;
