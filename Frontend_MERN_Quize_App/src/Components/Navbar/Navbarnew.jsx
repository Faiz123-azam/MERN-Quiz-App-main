import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logouthandler = () => {
    if (userName !== null) {
      dispatch(Logouthandleraction());
      toast(`${userName} Successfully Logout `, {
        type: "success",
      });
    }
    if (adminName == "Sudhir P Chavhan") {
      toast(`Sudhir P Chavhan Successfully Logout `, {
        type: "success",
      });
      dispatch(Logouthandleraction());
    }
    navigate("/");
  };

  const profilenavigate = () => {
    navigate("/profile");
  };
  return (
    <div className="w-11/12 h-24 m-auto flex item-center justify-between  bg-slate-50 mb-8 ">
        <div className="flex items-center justify-center text-2xl font-bold text-blue-600">
          Quizify
        </div> 
      <div className="w-3/12 flex justify-around py-4 mt-2">
        {" "}
        <div className="flex">
          <div className=" pt-2">
            {userName !== null || adminName !== null ? (
              <div className="flex ">
                <div
                  className="font-medium cursor-pointer text-xl"
                  onClick={profilenavigate}
                >
                  PROFILE
                </div>{" "}
                <div
                  onClick={() => {
                    logouthandler();
                  }}
                  className="ml-4 font-medium cursor-pointer text-xl"
                >
                  LOGOUT
                </div>
              </div>
            ) : (
              <Link to="/register" className="font-medium mt-16 ml-24 text-2xl">
                SIGN IN
              </Link>
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-10 mt-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
