const CheckOTOForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <p>enter confirm code</p>
      <button type="submit" className="btn btn--primary w-full">
        send
      </button>
    </form>
  );
};

export default CheckOTOForm;
