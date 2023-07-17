import OtpInput from "react-otp-input";
import { IoIosArrowRoundBack } from "react-icons/io";
const CheckOTOForm = ({
  onSubmit,
  otp,
  setOtp,
  onBack,
  time,
  onResendOTP,
  OTPResponse,
  isCheckingOTP,
}) => {
  console.log(time);
  return (
    <>
      <button className="text-sm text-gray-400 mb-2 font-bold" onClick={onBack}>
        <IoIosArrowRoundBack className="w-7 h-7 " />
      </button>
      {OTPResponse && (
        <button
          onClick={onBack}
          className=" text-primary-700 hover:font-bold block  hover:text-primary-900 mb-1 transition-all duration-200 ease-in-out"
        >
          edit your number ?
        </button>
      )}
      {time > 0 ? (
        <p className="text-slate-400 mb-4">{time} second until resend code</p>
      ) : (
        <button
          onClick={onResendOTP}
          className="btn    text-primary-700 hover:font-bold block  hover:text-primary-900 mb-4 transition-all duration-200 ease-in-out"
        >
          resend code
        </button>
      )}
      <form onSubmit={onSubmit} className="space-y-8">
        <p>enter confirm code</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
          containerStyle="flex gap-x-2 justify-center"
        />

        <button
          disabled={isCheckingOTP}
          type="submit"
          className="btn btn--primary w-full"
        >
          {isCheckingOTP ? "LOADING ..." : "send"}
        </button>
      </form>
    </>
  );
};

export default CheckOTOForm;
