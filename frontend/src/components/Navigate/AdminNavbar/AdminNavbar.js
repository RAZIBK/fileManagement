import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export default function AdminNavbar() {
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
            to="/admin"
            type="button"
            className="mr-4 px-4 py-2 border border-transparent shadow-sm text-sm font-medium  text-white"
          >
            <span>Admin Home</span>
          </Link>
          <div>
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
