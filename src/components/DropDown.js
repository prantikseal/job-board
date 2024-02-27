



const DropDown = () => {
    return (
      // animate delay
      <div className="options absolute top-9 left-0 bg-black rounded-lg shadow-lg p-4 w-48 hidden group-hover:block text-white animate-fade-in-down transition-all duration-300 ease-in-out">
        <ul className="flex flex-col gap-3 group">
          <li>
            <a href="#" className="hover:text-slate-600">Browse All</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-600">Software Engineering Jobs</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-600">Marketing Jobs</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-600">Designer Jobs</a>
          </li>
        </ul>
      </div>
    );
  };

export default DropDown;