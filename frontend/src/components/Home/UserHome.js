import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../utils/BaseUrl";

export default function Home() {
  const [allPdf, setAllPdf] = useState();

  useEffect(() => {
    getMyPdf();
  }, []);

  const getMyPdf = async () => {
    try {
      const user = localStorage.getItem("userToken");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      };
      const { data } = await axios.get(`${BaseUrl}/api/pdf`, config);
      if (data) {
        setAllPdf(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const download = async (item) => {
    try {
      fetch(`${item.pdfId}`).then((response) => {
        console.log(response);
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = `${item.pdfName}`;
          alink.click();
        });
      });
    } catch (err) {}
  };

  console.log(allPdf);
  return (
    <div className="mx-20 mt-10">
      {allPdf?.length > 0 ? (
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                No
              </th>
              <th scope="col" className="py-3 px-6">
                Project Name
              </th>

              <th scope="col" className="py-3 px-6">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {allPdf?.map((item, index) => (
              <tr key={index} className="bg-white ">
                <td className="py-4 px-6">{index + 1}</td>
                <td scope="row" className="py-4 px-6 font-medium ">
                  {item?.pdfName}
                </td>
                <td className="py-4 px-6">
                  <button onClick={() => download(item)}>DOWNLOAD</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h1 className="font-bold text-2xl text-center">No Files</h1>
        </div>
      )}
    </div>
  );
}
