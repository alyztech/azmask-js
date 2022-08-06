import React, {useState, ChangeEvent} from 'react';
import azMask from "@alyz.tech/azmask/src/azMask/azMask";
import logo from './logo.svg';
import './App.css';
import MaskFactory from "@alyz.tech/azmask/src/maskFactory/";
import MaskFactoryType from "@alyz.tech/azmask/src/maskFactory/MaskFactoryType";
import MaskType from "@alyz.tech/azmask/src/MaskType";
const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER);

function App() {

  const [cpf, setCpf] = useState('')
  const cpfMask = azMask([
    maskFactory.createMask(0),
    maskFactory.createMask(1),
    maskFactory.createMask(2),
    {
      maskType: MaskType.FIXED,
      value: '.',
      index: 3,
    },
    maskFactory.createMask(4),
    maskFactory.createMask(5),
    maskFactory.createMask(6),
    {
      maskType: MaskType.FIXED,
      value: '.',
      index: 7,
    },
    maskFactory.createMask(8),
    maskFactory.createMask(9),
    maskFactory.createMask(10),
    {
      maskType: MaskType.FIXED,
      value: '-',
      index: 11,
    },
    maskFactory.createMask(12),
    maskFactory.createMask(13),
  ])

  const handleCpfChange =(e: ChangeEvent<HTMLInputElement>) => {
    cpfMask.formatValue(e.target.value, (masked, unmaked) => {
      setCpf(masked);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="text" value={cpf} onChange={handleCpfChange} />
      </header>
    </div>
  );
}

export default App;
