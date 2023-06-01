import React from "react";
import OptionsStock from "./OptionsStock";

const SearchStock = (props) => {


  return (
    <div className="searchStock">
      <div className="relative flex items-center gap-4 px-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for Stock"
            className="bg-transparent w-full p-2 px-3 pr-11 rounded-md focus:border focus:border-gray-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-2 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <div
          onClick={() => props.closeBox(false)}
          className="closeBtn flex items-center text-sm h-full rounded-md px-3 shadow-md cursor-pointer"
        >
          Close
        </div>
      </div>

      {/* options */}

      <header className="text-md px-4 font-semibold">Options</header>
      <section className="options grid gap-3 text-sm">
        <ul className="ul1 grid gap-3 px-4 pb-5">
          {/* Options Stock Tabs  */}
          <OptionsStock />
          <OptionsStock />
        </ul>
      </section>

      {/* Normal Stocks Section */}

      <header className="text-md h-min px-4 font-semibold">Stocks</header>
      <section className="normalStocks myScrollBlurY grid gap-3">
        <div className="relative h-full">
          <ul className="grid gap-3 px-4">
            <li>
              <div className="companyLogo h-6 w-6 rounded-full overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/040/306/original/paytm-logo-icon-free-vector.jpg"
                  className=" object-contain scale-125"
                />
              </div>

              <div className="p-0.5 px-2 rounded-md text-sky-400 text-sm">Adani Ports Sez Ltd.</div>

              <div className="px-2 py-0.5 rounded-md bg-neutral-700 text-xs">
                MCX
              </div>

              <div className="expiry text-sm">15 Jan</div>
            </li>
            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SearchStock;
