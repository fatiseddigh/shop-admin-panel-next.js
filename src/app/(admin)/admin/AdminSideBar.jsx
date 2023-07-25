"use client";

import Link from "next/link";
import { HiHome, HiUser } from "react-icons/hi";
import {
  BiLogOut,
  BiSolidDashboard,
  BiLogoProductHunt,
  BiSolidCoupon,
} from "react-icons/bi";
import { MdPayments, MdCategory } from "react-icons/md";
import { logout } from "@/services/authServices";

function AdminSideBar() {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };

  return (
    <div>
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
          <Link href="/admin">
            <div className="flex items-center">
              <BiSolidDashboard className="h-5 w-5 mr-1" />
              <p className="text-md pt-1">dashboard</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <Link href="/admin/users">
            <div className="flex items-center">
              <HiUser className="h-5 w-5 mr-1" />
              <p className="text-md pt-1"> users</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <Link href="/admin/products">
            <div className="flex items-center">
              <BiLogoProductHunt className="h-5 w-5 mr-1" />
              <p className="text-md pt-1"> products</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <Link href="/admin/categories">
            <div className="flex items-center">
              <MdCategory className="h-5 w-5 mr-1" />
              <p className="text-md pt-1"> categories</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <Link href="/admin/payments">
            <div className="flex items-center">
              <MdPayments className="h-5 w-5 mr-1" />
              <p className="text-md pt-1"> payments</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <Link href="/admin/coupons">
            <div className="flex items-center">
              <BiSolidCoupon className="h-5 w-5 mr-1" />
              <p className="text-md pt-1"> coupons</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <button onClick={logoutHandler}>
            <div className="flex items-center">
              <BiLogOut className="h-5 w-5 mr-1" />
              <p className="text-md pt-1">Logout</p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default AdminSideBar;
