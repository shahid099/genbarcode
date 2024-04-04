import Barcode from "react-jsbarcode";
import React, { useState } from "react";
const Mainpage = () => {
    // States 
  const [textValue, setTextValue] = useState('');
  const [barcodeArray, setBarcodeArray] = useState([]);
  const filteredArr = barcodeArray.filter(item => item !== '');
  // Function Handlers
  const handleChange = (event)=> {
    setTextValue(event.target.value);
  }

  const handleClick =()=> {
    const arrayofBarcode = textValue.split(/\s+/);
    setBarcodeArray(arrayofBarcode);
  }

  return (
    <div className="w-full min-h-screen">
      <section className="flex items-center justify-center mt-5">
        <textarea 
          className="flex rounded-md p-2 border-red-200 outline-none" 
          value={textValue} 
          onChange={handleChange} 
          cols="80" rows="8" placeholder="Type something..."></textarea>
      </section>
      <section className="flex justify-center">
        <button 
          className="px-10 py-3 rounded-md bg-amber-300 mt-4" 
          onClick={handleClick}>
            Generate
        </button>
      </section>
      <section>
          <div className="w-full px-10 flex justify-center items-center mt-10 flex-col gap-1">
           {filteredArr.map((value, index) => (
            <div className="flex" key={index}>
              <Barcode
                value={value}
                options={{
                  format: "code128",
                  lineColor: "#000",
                  width: "6px",
                  height: "250px",
                  fontSize: '30',
                }}
                renderer="svg"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
