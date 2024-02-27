
import React from 'react'
import PostAJobBtn from './PostAJobBtn'

const JobWidget = () => {
  return (
    <div className=" text-center bg-opacity-50 bg-gray-300 rounded-lg p-5 flex flex-col justify-center items-center">
        <h3 className="font-semibold text-2xl mb-2">Post a Job Today</h3>
        <p className="mb-6">Everyday 10,000+ potential clients visit our website. Hire exclusive talent by posting your job today.</p>
        <PostAJobBtn />
    </div>
  )
}

export default JobWidget