import OtpInput from "react-otp-input";

const CheckOTOForm = ({
  onSubmit,
  otp,
  setOtp,
  onBack,
  time,
  onResendOTP,
  OTPResponse,
}) => {
  console.log(time);
  return (
    <>
      <button className="text-sm text-gray-400 mb-2" onClick={onBack}>
        back
      </button>
      {/* {OTPResponse && ( */}
      <button
        onClick={onBack}
        className="btn text-primary-700 hover:font-bold block  hover:text-primary-900 mb-4 transition-all duration-200 ease-in-out"
      >
        edit your number ?
      </button>
      {/* )} */}
      <form onSubmit={onSubmit} className="space-y-8">
        <p className="text-center">enter confirm code</p>
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
        {time > 0 ? (
          <p>{time} second until resend code</p>
        ) : (
          <button
            onClick={onResendOTP}
            className="btn border border-primary-700  w-full hover:bg-primary-700 py-2"
          >
            resend code
          </button>
        )}
        <button type="submit" className="btn btn--primary w-full">
          send
        </button>
      </form>
    </>
  );
};

export default CheckOTOForm;
