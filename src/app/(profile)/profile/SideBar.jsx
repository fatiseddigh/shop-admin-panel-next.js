"use client";
import { logout } from "@/services/authServices";
import Link from "next/link";
import { HiHome, HiUser } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";

const SideBar = () => {
  const logoutHandler = async () => {
    await logout();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItem");
    localStorage.removeItem("token");
    document.location.href = "/";
  };
  return (
    <>
      <ul className="flex flex-col space-y-4 content-center divide-y divide-primary-300 text-secondary-800 ">
        <li className="pt-4 hover:font-bold">
          <Link href="/">
            <div className="flex items-center">
              <HiHome className="h-5 w-5 mr-1" />
              <p className="text-md pt-1">home page</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <Link href="/profile/me">
            <div className="flex items-center">
              <HiUser className="h-5 w-5 mr-1" />
              <p className="text-md pt-1">user info</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <button onClick={logoutHandler}>
            <div className="flex items-center">
              <BiLogOut className="h-5 w-5 mr-1" />
              <p className="text-md pt-1">Logout</p>
            </div>
          </button>{" "}
        </li>
      </ul>
    </>
  );
};

export default SideBar;
