"use client";
import Loading from "@/common/Loading";
import { userPaymentHeads } from "@/constants/tabelHeads";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateStringShort } from "@/utils/toLoacalDate";

const Payment = () => {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <Loading />;
  return (
    <>
      <h1 className="font-extrabold py-3 text-primary-800">Payment list</h1>
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm ">
        <thead>
          <tr>
            {userPaymentHeads.map((item) => {
              return (
                <td key={item.id} className="whitespace-nowrap table__th">
                  {item.label}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => {
            return (
              <tr key={payment._id}>
                <td className="table__td">{index}</td>
                <td className="table__td">{payment.invoiceNumber}</td>
                <td className="table__td">{payment.description}</td>
                <td className="table__td">
                  <div className="flex flex-col gap-y-2 items-start">
                    {payment.cart.productDetail.map((product) => {
                      return (
                        <span
                          className="whitespace-normal px-2 py-0 badge badge--secondary"
                          key={product._id}
                        >
                          {product.title}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className="table__td">{payment.amount}</td>
                <td className="table__td">
                  {toLocalDateStringShort(payment.createdAt)}
                </td>
                <td className="table__td">
                  {payment.status === "COMPLETED" ? (
                    <span className="badge badge--success">successful</span>
                  ) : (
                    <span className="badge badge--error">Unsuccessful</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Payment;
