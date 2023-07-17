import TextField from "@/common/TextField";

const SendOTOForm = ({ phoneNumber, onChange, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="phone number"
        name="phone-number"
        value={phoneNumber}
        onChange={onChange}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="btn btn--primary w-full"
      >
        {isLoading ? "LOADING ..." : "send code"}
      </button>
    </form>
  );
};

export default SendOTOForm;
