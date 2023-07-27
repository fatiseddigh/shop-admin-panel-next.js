import DatePicker from "react-multi-date-picker";
import RadioInput from "@/common/RadioInput";
import Select from "react-select";
import TextField from "@/common/TextField";
function CouponForm({
  formData,
  onSubmit,
  onFormChange,
  type,
  setType,
  options,
  onChangeSelect,
  expireDate,
  setExpireDate,
  defaultValue = "",
}) {
  return (
    <div className="max-w-sm">
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="code"
          name="code"
          onChange={onFormChange}
          value={formData.code || ""}
        />
        <TextField
          label="amount"
          name="amount"
          onChange={onFormChange}
          value={formData.amount || ""}
        />
        <TextField
          label="usage limit"
          name="usageLimit"
          onChange={onFormChange}
          value={formData.usageLimit || ""}
        />
        <div>
          <span className="pb-5"> coupon type</span>
          <div className="flex items-center justify-between">
            <RadioInput
              checked={type === "percent"}
              id="percent-type"
              name="type"
              label="percent"
              value="percent"
              onChange={(e) => setType(e.target.value)}
            />
            <RadioInput
              checked={type === "fixedProduct"}
              id="fixedProduct-type"
              name="type"
              label="fixed product"
              value="fixedProduct"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="products" className="mb-2 block">
            products contain
          </label>
          <Select
            isMulti
            instanceId="products"
            onChange={onChangeSelect}
            options={options}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
            defaultValue={defaultValue}
          />
        </div>
        <div>
          <span className="mb-4 block">expire date</span>
          <DatePicker
            inputClass="textField__input w-full"
            value={expireDate}
            onChange={(date) => setExpireDate(date)}
            format="MM/DD/YYYY"
          />
        </div>
        <button className="btn btn--primary w-full">confirm</button>
      </form>
    </div>
  );
}

export default CouponForm;
