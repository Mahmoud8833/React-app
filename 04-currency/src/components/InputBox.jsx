/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function InpotBox({
  label,
  amount,
  onAmoutnChange,
  onCurrencyChange,
  currencyOptions = [],
  selctedCurrency = "USD",
  amountDisabled = false,
  currecyDisabled = false,
  className = "",
}) {
  return (
    <div className="{`${className}`}">
      <div>
        <label htmlFor="">{label}</label>
        <input
          type="number"
          placeholder="0"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmoutnChange && onAmoutnChange(Number(e.target.value))
          }
        />
      </div>
      <div>
        <p>Currency Type</p>
        <select
          disabled={currecyDisabled}
          value={selctedCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InpotBox;
