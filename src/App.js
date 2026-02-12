import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [myRandomColor, setMyRandomColor] = useState(randomcolor);
  const [colorInput, setColorInput] = useState();
  const generateFromInput = (text) => {
    const [hue, luminosity] = text.split(' ');
    return randomcolor({ hue, luminosity });
  };
  return (
    <div>
      <div
        style={{
          padding: '5px 5px',
          margin: '5px',
        }}
      >
        <h1>Random Color Generator</h1>
        <p>
          Please click the 'generate' button to randomly change the color of the
          box below and display a hexcode or use the input field to choose a
          specific hue and luminosity
        </p>
      </div>
      <button
        style={{
          fontSize: '15px',
          padding: '5px 10px',
          margin: '10px',
          width: '220px',
        }}
        onClick={() => {
          const newColor = randomcolor();
          setMyRandomColor(newColor);
        }}
      >
        Generate
      </button>
      <div>
        <input
          style={{
            fontSize: '15px',
            padding: '5px 10px',
            margin: '10px',
            width: '195px',
          }}
          value={colorInput}
          onChange={(event) => {
            const val = event.currentTarget.value;
            setColorInput(val);
            setMyRandomColor(generateFromInput(val));
          }}
        />
      </div>
      <div
        style={{
          fontSize: '15px',
          backgroundColor: myRandomColor,
          padding: '5px 10px',
          margin: '10px',
          width: '200px',
          borderRadius: '3px',
        }}
      >
        Generated Color: {myRandomColor}
      </div>
    </div>
  );
}
