"use client";
import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";

const Header = () => {
  const { data, isLoading, error } = useGetUser();
  const { user, cart } = data || {};
  return (
    <header
      className={`shadow-md mb-12 sticky top-0 transition-all duration-200 bg-slate-50 ${
        isLoading ? "blur-md opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav>
        <ul className="flex justify-between items-center py-2 container xl:max-w-screen-xl">
          <li>
            <Link href="/" className="block py-2 font-bold text-purple-600">
              home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="block py-2 font-bold text-purple-600"
            >
              products
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="block py-2 font-bold text-purple-600"
            >
              basket({cart ? cart.payDetail.productIds.length : 0})
            </Link>
          </li>
          {user ? (
            <span>{user.name}</span>
          ) : (
            <li>
              <Link
                href="/auth"
                className="block py-2 font-bold text-purple-600"
              >
                login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
