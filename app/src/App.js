import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Button } from 'reactstrap';
import './style.css'


function App() {

  const[valor1, setValor1] = useState('');
  const[valor2, setValor2] = useState('');
  const[result, setResult] = useState('');

  function Somar() {
    const total = Number(valor1) + Number(valor2);
    setResult(total.toFixed(2));    
  }

  function Subtrair() {
    const total = Number(valor1) - Number(valor2);
    setResult(total.toFixed(2));
  }

  function Multiplicar() {
    const total = Number(valor1) * Number(valor2);
    setResult(total.toFixed(2));
  }

  function Dividir() {
    const total = Number(valor1) / Number(valor2);
    setResult(total.toFixed(2));
  }

  function Limpar() {
    setValor1('');
    setValor2('');
    setResult('');
  }

  return (
    
    <div className="container">
      <h1>Calculadora</h1>

      <span className="entradas">
        <Input bsSize="sm" type="text" value={valor1} onChange={(e)=>setValor1(e.target.value)} placeholder="Valor1"/>
        <Input bsSize="sm" type="text" value={valor2} onChange={(e)=>setValor2(e.target.value)} placeholder="Valor2" />
        <Input bsSize="sm" type="text" value={result} onChange={(e)=>setResult(e.target.value)} placeholder="Resultado" />
      </span>

      <span className="container2">
        <Button onClick={()=>Somar()} color="primary">Soma</Button>
        <Button onClick={()=>Subtrair()} color="primary">Subtração</Button>
        <Button onClick={()=>Multiplicar()} color="primary">Multiplicação</Button>
        <Button onClick={()=>Dividir()} color="primary">Divisão</Button>
        <Button onClick={()=>Limpar()} color="primary">Limpar</Button>
      </span>
    </div>
  );
}

export default App;