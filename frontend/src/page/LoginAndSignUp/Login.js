import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import { toast } from "react-hot-toast";
import { BaseUrl } from "../../utils/BaseUrl";

const formikSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email format"
    ),
  password: Yup.string().required("password is required"),
});

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
    },
    validationSchema: formikSchema,
  });

  const login = async (data) => {
    try {
      const response = await axios.post(`${BaseUrl}/api/user/login`, data);
      if (response.data.success) {
        if (response.data.data.isAdmin) {
          localStorage.setItem("adminToken", response.data.token);
          navigate("/admin");
        } else {
          localStorage.setItem("userToken", response.data.token);
          navigate("/");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const adminToken = localStorage.getItem("adminToken");
  const userToken = localStorage.getItem("userToken");

  if (adminToken) {
    return <Navigate to="/admin" />;
  } else if (userToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-slate-100 h-screen grid justify-items-stretch">
      <div className=" justify-self-center self-center w-full max-w-md">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="text-center font-bold">Login</h3>

          <div className="mb-4 mt-4">
            <label
              for=""
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              type="text"
              placeholder="Email"
            />
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>

          <div className="mb-4 mt-4">
            <label
              for=""
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              type="password"
              placeholder="Password"
            />
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.password && formik.errors.password}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="grid justify-items-center">

          <Link to="/register" className="mt-3  text-green-700">
            Don't have an account?{" "}
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
