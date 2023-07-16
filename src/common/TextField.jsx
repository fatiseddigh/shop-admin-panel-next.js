const TextField = ({ name, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block pb-2">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-purple-600  py-2 rounded-sm"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
