import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 15px;
  padding: 5px 5px;
  margin: 20px 10px 20px;
  width: 220px;
  display: block;
`;

const Input = styled.input`
  font-size: 15px;
  padding: 5px 10px;
  margin: 10px 10px;
  width: 195px;
  display: block;
`;

const Output = styled.div`
  font-size: 15px;
  padding: 5px 10px;
  margin: 10px;
  width: 200px;
  border-radius: 3px;
  display: block;
`;
export default function App() {
  const color = randomcolor();
  const [myRandomColor, setMyRandomColor] = useState(color);
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');
  const generateFromInput = {
    hue: hue,
    luminosity: lum,
  };
  return (
    <>
      <div style={{ padding: '5px 5px', margin: '5px' }}>
        <h1>Random Color Generator</h1>
        <p>
          Please enter a hue and luminosity or click the 'generate' button to
          randomly change the color of the box below and display a hexcode
        </p>
      </div>
      <p style={{ marginLeft: '12px' }}>Enter a hue here:</p>
      <Input
        value={hue}
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
      />
      <p style={{ marginLeft: '12px' }}> Enter a luminosity here: </p>
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

      <Output style={{ backgroundColor: myRandomColor }}>
        Generated Color: {myRandomColor}
      </Output>
    </>
  );
}
