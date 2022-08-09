import React, {useState, ChangeEvent} from 'react';
import azMask, {azMaskGroup, MaskFactory, MaskFactoryType, MaskType} from "@alyz.tech/azmask";
import logo from './logo.svg';
import './App.css';

const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER);

const cpfMask = azMask([
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '-',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
])

const cnpjMasks = azMaskGroup([[
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '-',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
], [
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '/',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  maskFactory.createMask(),
  {
    maskType: MaskType.FIXED,
    value: '-',
  },
  maskFactory.createMask(),
  maskFactory.createMask(),
]])

function App() {

  const [cpf, setCpf] = useState('')
  const [cpfOrCnpj, setCpfOrCnpj] = useState('')

  const handleCpfChange =(e: ChangeEvent<HTMLInputElement>) => {
    cpfMask.formatValue(e.target.value, (masked: string, unmaked: string) => {
      setCpf(masked);
    })
  }

  const handleCpfOrCnpjChange =(e: ChangeEvent<HTMLInputElement>) => {
    cnpjMasks.formatValue(e.target.value, (masked: string, unmaked: string) => {
      setCpfOrCnpj(masked);
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
        <input type="text" value={cpfOrCnpj} onChange={handleCpfOrCnpjChange} />
      </header>
    </div>
  );
}

export default App;
