import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 15px;
  padding: 5px 5px;
  margin: 10px 10px 20px;
  width: 220px;
  display: block;
`;

const Input = styled.input`
  font-size: 15px;
  padding: 5px 10px;
  margin: 10px;
  width: 195px;
`;

const Output = styled.div`
  font-size: 15px;
  padding: 5px 10px;
  margin: 10px;
  width: 200px;
  border-radius: 3px;
`;
export default function App() {
  const [myRandomColor, setMyRandomColor] = useState(randomcolor);
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');
  const generateFromInput = {
    hue: hue,
    luminosity: lum,
  };
  return (
    <div>
      <div style={{ padding: '5px 5px', margin: '5px' }}>
        <h1>Random Color Generator</h1>
        <p>
          Please enter a hue and luminosity or click the 'generate' button to
          randomly change the color of the box below and display a hexcode
        </p>
      </div>

      <div>
        <div style={{ marginLeft: '12px' }}>Enter a hue here.</div>
        <Input
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />
        <div style={{ marginLeft: '12px' }}>Enter a luminosity here.</div>
        <Input
          value={lum}
          onChange={(event) => {
            setLum(event.currentTarget.value);
          }}
        />
        <Button
          onClick={() => {
            const newColor = randomcolor(generateFromInput);
            setMyRandomColor(newColor);
          }}
        >
          Generate
        </Button>
      </div>
      <Output style={{ backgroundColor: myRandomColor }}>
        Generated Color: {myRandomColor}
      </Output>
    </div>
  );
}
