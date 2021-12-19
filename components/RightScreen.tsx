import React from "react";

function RightScreen() {
  return (
    <div className="mt-40 font-mono text-xl">
      <h1 className="grid grid-cols-2 mt-1">
        <p>Tip Amount</p>
        {/*  JS TO input*/}
        <p className="text-2xl text-blue-400 ml-14"> [Amount]</p>
        {/*  */}
        <p className="text-blue-800"> /person</p>
      </h1>
      <h2 className="grid grid-cols-2 mt-36">
        <p>Total</p>
        <p className="text-2xl text-blue-400 ml-14">[AMOUNT]</p>
        <p className="text-blue-800">/person</p>
      </h2>
      <button className="box-border h-12 font-semibold bg-blue-200 border-2 border-blue-200 rounded-lg hover:bg-blue-300 mt-36 w-44 ml-44">
        Reset
      </button>
    </div>
  );
}

export default RightScreen;
