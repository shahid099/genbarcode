# Project is About Barcode Generation

Try to learn About the Barcode Generation using a package.
```npm
npm install react-barcode
```

## Usage

```javascript
import Barcode from "react-jsbarcode";

{filteredArr.map((value, index) => (
            <div className="flex" key={index}>
              <Barcode
                value={value}
                options={{
                  format: `${selectedValue}`,
                  lineColor: `${lineColor}`,
                  width: `${width}px`,
                  height: '100px',
                  fontSize: '20',
                  background: '#ffff'
                }}
                renderer="svg"
              />
            </div>
          ))}
```
```
{
  width: 2,
  height: 100,
  format: "CODE128",
  displayValue: true,
  fontOptions: "",
  font: "monospace",
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  id: undefined,
  className: undefined
}
```
# Raference
```
https://github.com/lindell/JsBarcode
https://github.com/zpao/qrcode.react
```