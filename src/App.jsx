import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './Components';
function App() {
    const [amount , setAmount] = useState(0);
    const [convertedAmount , setConvertedAmount] = useState(0);
    const [from , setfrom] = useState("usd");
    const [to , setto] = useState("inr");

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = ()=>{
      setAmount(convertedAmount);
      setConvertedAmount(amount); 
      setfrom(to);
      setto(from);
    }

    const convert = ()=>{
      setConvertedAmount(amount * currencyInfo[to]);
    }


  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('data:image/jpeg;base64,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')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount}
                              onAmountChange = {(amount)=>setAmount(amount)}
                              currencyOptions = {options}
                              selectCurrency = {from}
                              onCurrencyChange = {(currency)=> setfrom(currency)}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount = {convertedAmount}
                              currencyOptions = {options}
                              selectCurrency = {to}
                              onCurrencyChange = {(currency)=> setto(currency)}
                              
                              amountDisable     // can't alter "to" value
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;