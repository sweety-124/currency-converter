import { useAppSelector } from "@/app/store";
import { IHistoryItem } from "@/app/store/slices/HistorySlice";
import React from "react";

type Props = {};

const HistoryList = (props: Props) => {
    
  const { history } = useAppSelector((state) => state.history);

  return (

<ul
role="list"
className="divide-y w-10/12 divide-gray-100 bg-white mt-4 p-5 rounded-md"
>
{history.map((history: IHistoryItem) => (
  <li
    key={history.date_time}
    className="flex justify-between gap-x-6 py-5"
  >
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          {history.source_currency}
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {"Source Currency"}
        </p>
      </div>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          {history.source_value}
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {"Source Value"}
        </p>
      </div>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          {history.target_currency}
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {"Target Currency"}
        </p>
      </div>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          {history.converted_value}
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {"Converted Value"}
        </p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{"Converted"}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">
        <time dateTime={history.date_time}>
          {new Date(history.date_time).toUTCString()}
        </time>
      </p>
    </div>
  </li>
))}

{history.length == 0 ? (
  <div>
    <p>No Conversion History Found.</p>
  </div>
) : null}
</ul>









    
  );
};

export default HistoryList;
