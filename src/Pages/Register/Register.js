import React, { useContext } from "react";
import Login from "../../assets/images/login/login.svg";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contaxts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { emailSignUP, googleSignIn } = useContext(AuthContext);
  const signUpHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    emailSignUP(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("sign up successfully", {});
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {});
      });
  };
  const googleHandler = () => {
    const provider = new GoogleAuthProvider();
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("sign In successfully", {});
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div className="flex w-4/5 mx-auto mt-12 mb-40 items-center">
      <div className="w-1/2">
        <img src={Login} alt="" />
      </div>
      <div className="border w-1/2 pl-16 rounded-lg">
        <h2 className="text-center text-4xl mt-16">Sign Up</h2>
        <form onSubmit={signUpHandler} className="">
          <div>
            <label className="text-lg font-medium " htmlFor="name">
              Name
            </label>
            <br />
            <input
              className="mt-5 outline-none border w-4/5 py-2 pl-5 rounded"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mt-7">
            <label className="text-lg font-medium " htmlFor="name">
              Email
            </label>
            <br />
            <input
              className="mt-5 outline-none border w-4/5 py-2 pl-5 rounded"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mt-7">
            <label className="text-lg font-medium " htmlFor="name">
              Confirm Password
            </label>
            <br />
            <input
              className="mt-5 outline-none border w-4/5 py-2 pl-5 rounded"
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
          </div>
          <button
            className="w-4/5 mt-7 bg-[#fe441f] py-2 rounded text-white text-lg font-medium hover:text-gray-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="w-4/5 mt-7">
          <h4 className="text-center">Or Sign Up With</h4>
          <div className="flex justify-center mt-5">
            <div className="bg-[#E8E8E8] hover:bg-[#D0D0D0] text-blue-600 text-3xl p-2 rounded-full mr-4 cursor-pointer">
              <GrFacebookOption></GrFacebookOption>
            </div>
            <div className="bg-[#E8E8E8] hover:bg-[#D0D0D0] text-blue-600 text-3xl p-2 rounded-full mr-4 cursor-pointer">
              <GrLinkedinOption></GrLinkedinOption>
            </div>
            <div className="bg-[#E8E8E8] hover:bg-[#D0D0D0]  text-3xl p-2 rounded-full cursor-pointer">
              <FcGoogle onClick={googleHandler}></FcGoogle>
            </div>
          </div>
          <h1 className="text-center mt-12 mb-16">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#f63d18]  border-b border-[#f63d18]"
            >
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
