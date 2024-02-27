import React from "react";
import Link from "next/link";

const PostAJobBtn = () => {
  return (
    <Link href="/post-a-job">
      <button className=" bg-black px-8 py-5 text-white font-normal rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
        Post a Job on Shifter
      </button>
    </Link>
  );
};

export default PostAJobBtn;
