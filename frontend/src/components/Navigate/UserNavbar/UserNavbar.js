import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

export default function UserNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-full">
      <div className="bg-blue-900 h-16 py-3 ">
        <div className="flex justify-between mx-20">
          <Link
            to={"/"}
            className="mr-4 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white "
          >
            <span>Home</span>
          </Link>
          <div>
            <Link
              to="/add-pdf"
              type="button"
              className="relative mr-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white border-gray-200 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 "
            >
              <AiOutlinePlus className="h-6 w-6 mr-2" />
              <span>Add PDF</span>
            </Link>
            <button
              onClick={logout}
              type="button"
              className="relative  inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white border-gray-200 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 "
            >
              <BiLogOut className="h-6 w-6 mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
