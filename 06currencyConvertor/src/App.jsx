import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [ammount,setAmmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,seTo]=useState("inr")
  const [convertedAmmount,setConvertedAmmount]=useState(0)


  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    seTo(from)
    setConvertedAmmount(ammount)
    setAmmount(convertedAmmount)
  }

  const convert=()=>{

    setConvertedAmmount(ammount*currencyInfo[to])
  }

  return (
    <div
        className="w-full h-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://i.pinimg.com/564x/d3/d1/24/d3d1247477f483e8fd30c7dcf3ba4d79.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            ammount={ammount}
                            currencyOption={options}
                            onAmmountChange={(ammount)=>setAmmount(ammount)}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
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
                            ammount={convertedAmmount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>seTo(currency)}
                            selectCurrency={to}
                            ammountDisable
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

export default App