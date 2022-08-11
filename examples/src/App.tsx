import React, {useState, ChangeEvent} from 'react';
import azMask, {azMaskGroup, MaskType,  createMasks, createNumberMask} from "@alyz.tech/azmask";
import './App.css';

console.log("cpfMask", createNumberMask())
console.log("cpfMask", createMasks(3, createNumberMask))

const cpfMask = azMask([
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '-',
  },
  ...createMasks(2, createNumberMask),
])

const cnpjMasks = azMaskGroup([[
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '-',
  },
  ...createMasks(2, createNumberMask),
], [
  ...createMasks(2, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '.',
  },
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '/',
  },
  ...createMasks(3, createNumberMask),
  {
    maskType: MaskType.FIXED,
    value: '-',
  },
  ...createMasks(2, createNumberMask),
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
        <input type="text" value={cpf} onChange={handleCpfChange} />
        <input type="text" value={cpfOrCnpj} onChange={handleCpfOrCnpjChange} />
      </header>
    </div>
  );
}

export default App;
