const FormikTextField = ({ name, label, formik, type, placeholder = "" }) => {
  return (
    <div>
      <label htmlFor={name} className="block pb-2">
        {label}
        {formik.touched[name] && formik.errors[name] ? (
          <div className="flex-1 ml-2 text-rose-500 text-left text-xs">
            {formik.errors[name]}
          </div>
        ) : null}
      </label>
      <input
        // autoComplete="off"
        placeholder={placeholder}
        className="textField__input"
        type={type || "text"}
        name={name}
        id={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
    </div>
  );
};

export default FormikTextField;
