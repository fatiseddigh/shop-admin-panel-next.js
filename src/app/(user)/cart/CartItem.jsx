"use client";
import { numberWithCommas } from "@/utils/customNumber";
import { HiOutlineTrash, HiPlus, HiMinus } from "react-icons/hi";

function CartItem({ cartItem }) {
  return (
    <div className="border rounded-xl p-4 flex justify-between">
      <span className="flex-1 font-bold">{cartItem.title}</span>
      <div className="flex items-center justify-between  gap-x-8 flex-1">
        <div>
          <div>
            price :
            <span
              className={`${
                cartItem.discount ? "line-through text-gray-500" : "font-bold"
              }`}
            >
              {numberWithCommas(cartItem.price)}
            </span>
          </div>
          {!!cartItem.discount && (
            <div className="flex items-center gap-x-2 mt-2">
              <p className="font-bold">
                {" "}
                {numberWithCommas(cartItem.offPrice)}
              </p>
              <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                {cartItem.discount} %
              </div>
            </div>
          )}
        </div>

        <span className="border-r-2 pr-2">quantity : {cartItem.quantity}</span>
        <div className="flex gap-x-3">
          <button className="bg-primary-900 text-white rounded p-1">
            <HiPlus className="w-4 h-4" />
          </button>
          <button className="border rounded p-1">
            {cartItem.quantity > 1 ? (
              <HiMinus className="w-4 h-4" />
            ) : (
              <HiOutlineTrash className=" text-rose-500 w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
