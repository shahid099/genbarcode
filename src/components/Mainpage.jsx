import Barcode from "react-jsbarcode";
import React, { useState, useContext } from "react";
import myContext from "../context/Mycontext";
const Mainpage = () => {
  const data = useContext(myContext);
  const { textValue, handleChange } = data;
    // States 
  const [barcodeArray, setBarcodeArray] = useState([]);
  const [selectedValue, setSelectedValue] = useState('code128');
  const [selectedbgColor, setSelectedbgColor] = useState('#ffff')
  const [lineColor, setLineColor] = useState('#000');
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(60);
  const [fontsize, setFontsize] = useState(20);
  const filteredArr = barcodeArray.filter(item => item !== '');
  // Function Handlers

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const handlebgColorchange = (event)=> {
    setSelectedbgColor(event.target.value);
  }

  const handleLineColorChange = (event)=> {
    setLineColor(event.target.value);
  }

  const handleWithChange = (event)=> {
    setWidth(event.target.value)
  }

  const handleHeightChange = (event)=> {
    setHeight(event.target.value)
  }

  const handleFontSizeChange = (event)=> {
    setFontsize(event.target.value);
  }

  const handleClick =()=> {
    const arrayofBarcode = textValue.split(/\s+/);
    setBarcodeArray(arrayofBarcode);
  }

  const handlePressEnter = (event)=> {
    if(event.key === 'Enter') {
      handleClick();
  }
}

  return (
    <div className="w-full min-h-screen relative">
      <section className="flex items-center justify-around mt-5">
        <textarea id="textarea"
          className="flex rounded-md p-2 border-red-200 outline-none" 
          value={textValue} 
          onChange={handleChange} 
          onKeyDown={handlePressEnter}
          cols="80" rows="8" placeholder="Type something..."></textarea>
        <div className="settings">
          <div className="formate">
            <h4>Select Format</h4>
            <select className="p-[2px] rounded-md" value={selectedValue} onChange={handleSelectChange} >
              <option value="code128">code128</option>
              <option value="code39">code39</option>
            </select>
          </div>
          <div className="bgColor" >
            <h4>Select Background Color</h4>
            <input className="rounded-lg" type="color" value={selectedbgColor} onChange={handlebgColorchange} />
          </div>
          <div className="lineColor">
            <h4>Select Line Color</h4>
            <input className="rounded-lg" type="color" value={lineColor} onChange={handleLineColorChange} />
          </div>
          <div className="widthHeight">
            <div className="with">
              <h4>Set With</h4>
              <input className="p-1 rounded-md w-20 text-center" type="number" value={width} onChange={handleWithChange} />
            </div>
            <div className="height">
              <h4>Set Height</h4>
              <input className="p-1 rounded-md w-20 text-center" type="number" value={height} onChange={handleHeightChange} />
            </div>
            <div className="fontSize">
              <h4>Set FontSize</h4>
              <input className="p-1 rounded-md w-20 text-center" type="number" value={fontsize} onChange={handleFontSizeChange} />
            </div>
          </div>
        </div>
      </section>
      <section className="sectionButton flex justify-center">
        <button 
          className="button px-10 py-3 rounded-md text-[white] text-xl" 
          onClick={handleClick} >
            Generate
        </button>
      </section>
      <section>
          <div className="w-full px-10 flex justify-center items-center mt-10 flex-col gap-2">
           {filteredArr.map((value, index) => (
            <div key={index}>
              <Barcode
                value={value}
                options={{
                  format: `${selectedValue}`,
                  lineColor: `${lineColor}`,
                  width: `${width}px`,
                  height: `${height}px`,
                  fontSize: `${fontsize}`,
                  background: `${selectedbgColor}`
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

// code128 code39 