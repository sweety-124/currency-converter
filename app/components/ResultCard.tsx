import React from "react";

type Props = {
  value: number;
};

function ResultCard({ value }: Props) {
  return (
    <div className="flex flex-col justify-center p-6 mt-4 bg-white shadow-md ">
      <h2 className="text-6xl mb-2 text-blue-500 font-bold">
        {value.toFixed(2)}
      </h2>
      <p className="text-blue-400">converted value</p>
    </div>
  );
}

export default ResultCard;
