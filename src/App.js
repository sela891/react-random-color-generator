import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 15px;
  padding: 5px 0;
  margin: 20px 0;
  width: 220px;
  display: block;
`;

const Input = styled.input`
  font-size: 15px;
  padding: 5px 0;
  margin: 10px 0;
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
    <div
      className="container"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Random Color Generator</h1>
      <div>
        Please enter a hue and luminosity or click the generate button to change
        the color of the box below and display a hexcode
      </div>
      <div style={{ marginTop: '12px' }}>Enter a hue here:</div>
      <Input
        value={hue}
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
      />
      <div style={{ marginTop: '12px' }}> Enter a luminosity here: </div>
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
    </div>
  );
}
