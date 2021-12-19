import React from "react";

function LeftBackground() {
  return (
    <div className="p-40">
      <h1 className="mb-5 font-mono text-xl ">Bill</h1>
      <h2>
        <input
          type="text"
          className="z-0 pl-10 pr-20 border-2 border-blue-500 border-solid rounded-lg cursor-pointer h-14 w-96 focus:shadow focus:outline-none"
          placeholder="Type..."
        />
      </h2>
      {/* Under the TYPE */}
      <h3 className="mt-5 font-mono text-xl mb-7 "> Select Tip % </h3>

      <h4 className="grid grid-cols-3 grid-rows-2 gap-4 font-mono text-center hover:cursor-pointer ">
        <p className="box-border p-5 bg-blue-200 rounded-lg h-18 w-28 hover:bg-blue-300">
          5%
        </p>
        <p className="box-border p-5 bg-blue-200 rounded-lg h-18 w-28 hover:bg-blue-300">
          10%
        </p>
        <p className="box-border p-5 bg-blue-200 rounded-lg h-18 w-28 hover:bg-blue-300">
          15%
        </p>
        <p className="box-border p-5 bg-blue-200 rounded-lg h-18 w-28 hover:bg-blue-300">
          25%
        </p>
        <p className="box-border p-5 bg-blue-200 rounded-lg h-18 w-28 hover:bg-blue-300">
          50%
        </p>
        <p className="box-border p-5 bg-blue-200 rounded-lg h-18 w-28 hover:bg-blue-300">
          100%
        </p>
      </h4>
      {/* number of peeps */}
      <h5 className="font-mono text-xl mt-7 ">Number Of People</h5>
      <input
        type="text"
        className="box-border pl-10 pr-20 border-2 border-blue-500 rounded-lg cursor-pointer w-96 mt-7 h-14 focus:outline-none focus:shadow"
        placeholder="Number Of People"
      />
    </div>
  );
}

export default LeftBackground;
