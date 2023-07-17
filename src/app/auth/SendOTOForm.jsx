import TextField from "@/common/TextField";

const SendOTOForm = ({ phoneNumber, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="phone number"
        name="phone-number"
        value={phoneNumber}
        onChange={onChange}
      />
      <button type="submit" className="btn btn--primary w-full">
        send code
      </button>
    </form>
  );
};

export default SendOTOForm;
