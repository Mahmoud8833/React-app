import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("EUR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo ?? {})

  const swap = () => {
    if (from && to) {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
    }
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <div>
        <div>
          <form onSubmit={
            (e) => {
              e.preventDefault()
              convert()
            }
          }>
            <div>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmoutnChange={(amount) => setAmount(amount)}
                selctedCurrency={from}
              />
            </div>
            <div>
              <button
                onClick={swap}
              >Swap</button>
            </div>
            <div>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmoutnChange={(amount) => setConvertedAmount(amount)}
                selctedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
