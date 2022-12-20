import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { BaseUrl } from "../../utils/BaseUrl";

function FileUploadPage() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [pdfName, setPdfName] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  // const changeHandler = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   // setIsFilePicked(true);
  // };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("File", selectedFile);
    formData.append("pdfName", pdfName);

    const user = localStorage.getItem("userToken");
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };
    const { data } = await axios.post(`${BaseUrl}/api/pdf`, formData, config);
    console.log(data);
    if (data.success) {
      toast.success(data.message);
      navigate("/");
    }
  };

  return (
    <>
      <div className="bg-slate-100 h-screen grid justify-items-stretch">
        <div className=" justify-self-center w-full max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black-300">
            Add PDF
          </h2>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmission} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PDF Name
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => setPdfName(e.target.value)}
                      id="pdfName"
                      name="pdfName"
                      type="text"
                      autoComplete="pdfName"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <input
                    type="file"
                    name="file"
                    onChange={(event) => setSelectedFile(event.target.files[0])}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUploadPage;
