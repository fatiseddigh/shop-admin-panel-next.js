import Link from "next/link";
import { HiHome, HiUser } from "react-icons/hi";

const SideBar = () => {
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
          <Link href="/me">
            {" "}
            <div className="flex items-center">
              <HiUser className="h-5 w-5 mr-1" />
              <p className="text-md pt-1">user info</p>
            </div>
          </Link>
        </li>
        <li className="pt-4 hover:font-bold">
          <Link href="/me">user info</Link>
        </li>{" "}
        <li className="pt-4 hover:font-bold">
          <Link href="/me">user info</Link>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
