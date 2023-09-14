"use client";
import React, { useRef, useState } from "react";
import ChooseCurrency from "../components/ChooseCurrency";
import ReduxProvider from "../store/ReduxProvider";
import ResultCard from "../components/ResultCard";
import { useAppDispatch } from "../store";
import { addToHistory } from "../store/slices/HistorySlice";
import { toast } from "react-toastify";

type Props = {
  currencies?: any;
};

async function getLatestValue(base: string) {
  const response = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UjiQbrMaaKm9IjroOuk8z2JivoIcMPVb5Wd9sJIp&&base_currency=${base}`
  );
  const data = await response.json();
  return data.data;
}

const ConvertForm = ({ currencies = {} }: Props) => {
  const optionsList = Object.keys(currencies);

  const [selectedFromCurrency, setSelectedFromCurrency] = useState<string>(
    optionsList[0]
  );
  const [selectedToCurrency, setSelectedToCurrency] = useState<string>(
    optionsList[1]
  );

  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const dispatch = useAppDispatch();

  const handleConversion = async () => {

    const base = await getLatestValue(selectedFromCurrency);
    if (amount && Number(amount) > 0) {
      let res = Number(amount) * base[selectedToCurrency];
      setResult(res);
      dispatch(
        addToHistory({
          source_value: amount,
          source_currency: selectedFromCurrency,
          converted_value: res,
          date_time: new Date().toISOString(),
          target_currency: selectedToCurrency,
        })
      );
    } else {
      //    console.log("ERROR");
      toast.error("Enter a valid amount");
    }
  };

  return (
    <>
      <form className="mt-5 mb-3 flex flex-col gap-x-4 items-center justify-center bg-white shadow-sm py-6">
        <div className="flex flex-row gap-x-4  items-center justify-center">
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            name="amount-value"
            id="amount-id"
            autoComplete="off"
            placeholder="Enter the amount"
            className="flex items-center w-auto md:w-60 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          />
          <div className="flex justify-between items-center   flex-row  mt-0 md:gap-x-4">
            <div>
              <ChooseCurrency
                type={'from'}
                currency={selectedFromCurrency}
                setSelectedCurrency={setSelectedFromCurrency}
                options={optionsList}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-4  items-center justify-center mt-4">
          <h3 className="ml-0 md:ml-5 ">Convert To</h3>
          <ChooseCurrency
            type={'to'}
            currency={selectedToCurrency}
            setSelectedCurrency={setSelectedToCurrency}
            options={optionsList}
          />
          <button
          id="convertNow"
            type="button"
            onClick={handleConversion}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 h-12 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Convert Now
          </button>
        </div>
      </form>
      {result ? <ResultCard value={result} /> : null}
    </>
  );
};

export default ConvertForm;
