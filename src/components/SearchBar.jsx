import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-bar-container absolute top-0 left-0 right-0 bg-black opacity-50 w-full h-screen">
        <div className="search-bar flex flex-col justify-center items-center h-full">
            <h1 className="text-white font-medium text-4xl mb-8">Find Your Dream Job</h1>
            <form action="submit" className="flex flex-col gap-4">
            <div className="form-group w-full">
                <input
                type="text"
                className="bg-opacity-50 bg-gray-300 rounded-lg outline-none w-full p-4"
                id="name"
                placeholder="Search for job title, company, or location"
                name="name"
                />
            </div>
            <button className="bg-white px-8 py-5 w-full text-black font-normal rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
                Search
            </button>
            </form>
        </div>
    </div>
  )
}

export default SearchBar