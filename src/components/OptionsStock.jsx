import React, { useState } from "react";

const OptionsStock = () => {
  const [options, setOptions] = useState(false);
  const [CE, setCE] = useState(true);
  const [pricePop, setPricePop] = useState(false);
  return (
    <li className="flex flex-col justify-center gap-3">
      <div
        onClick={() => setOptions(!options)}
        className="stock myShadow "
      >
        doiAdani Ports Sez Ltd.
      </div>

      {/* Inside Options Stokcks Tab CE/PE  */}

      {options && (
        <ul className="ul2">
          <li>
            <div className="grid gap-2">
              <div>Adani Ports 23 Ltd.</div>

              <div
                className={`${
                  CE ? "CEselected" : "PEselected"
                } flex justify-center gap-3`}
              >
                <div onClick={() => setCE(true)} className="CE">
                  CE
                </div>
                <div onClick={() => setCE(false)} className="PE">
                  PE
                </div>
              </div>
            </div>
            <div className="relative w-min">
              <div
                onClick={() => setPricePop(true)}
                className="price bg-black3 text-white rounded-md p-1.5 appearance-none px-2.5 pr-6"
              >
                1400
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute h-3 fill-neutral-400 top-1/2 -translate-y-1/2 right-[3.4rem] translate-x-12"
                viewBox="0 0 512 512"
              >
                <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
              </svg>
            </div>

            {pricePop && (
              <div className="pricesPop">
                <input type="tel" placeholder="search prices" />
                <ul className="grid gap-2">
                  <li className="price">1400</li>
                  <li className="price">1600</li>
                  <li className="price">1700</li>
                  <li className="price">1800</li>
                  <li className="price">1600</li>
                  <li className="price">1700</li>
                  <li className="price">1800</li>
                </ul>
              </div>
            )}
            {pricePop && (
              <div
                onClick={() => setPricePop(false)}
                className="pricesPopBackdrop"
              ></div>
            )}

            <button className="addBtn active:scale-95">Add</button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default OptionsStock;
