import { numberWithCommas } from "@/utils/customNumber";

function CartSummary({ payDetail }) {
  return (
    <div className="border px-2 py-4 rounded-xl">
      <p className="mb-4 font-bold"> Payment Information</p>
      <div className="mb-4 flex items-center justify-between">
        <span> total </span>
        <span>{numberWithCommas(payDetail.totalGrossPrice)} $</span>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span>discount</span>
        <span>-{numberWithCommas(payDetail.totalOffAmount)} $ </span>
      </div>
      <div className="mb-6 flex items-center justify-between font-bold">
        <span>Subtotal </span>
        <span>{numberWithCommas(payDetail.totalPrice)} $</span>
      </div>
      <div>
        <button className="btn btn--primary w-full">Proceed to checkout</button>
      </div>
    </div>
  );
}
export default CartSummary;
