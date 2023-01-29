import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import { BaseColaboradores } from './BaseColaboradores';

const colaboradores = [...BaseColaboradores]
//ANOTAR

function App() {
  const [input_filter, setInput_filter] = useState('');

  const handleInputFilter = (e)=>{
    setInput_filter(e.target.value)
    console.log(input_filter)
  }

  return (
    <div className="App">
      <div className='container-fluid bg-dark text-light d-flex py-3'>
        <h3 className='ms-5'>Buscador de Colaboradores</h3>
        <input className='ms-auto text-center' placeholder='Busca un colaborador' onChange={handleInputFilter}></input>
      </div>
      <div className='container my-5'>
        <form>
          <label>Nombre del colaborador</label>
          <input className='form-control' placeholder='Ingresa el nombre del colaborador'></input>
          <br></br>
          <label>Correo del colaborador</label>
          <input className='form-control' placeholder='Ingresa el correo del colaborador'></input>
          <br></br>
          <button className='btn btn-primary'>Agregar el colaborador</button>
        </form> 
      </div>
      <hr></hr>
      <div className='container'>
        <h2>Listado de colaboradores</h2>
        <ul>
          {
            colaboradores.filter((colaborador) =>
            {
              if (input_filter !== '') {
                colaborador.nombre.includes(input_filter)
                return colaborador;
              } else {
                return colaborador;
              }
            }
            ).map((colaborador, index) => 
            {return(<li key={index}>{colaborador.nombre} - {colaborador.correo}</li>)})
          }
        </ul>
      </div>      
    </div>
  );
}

export default App;
