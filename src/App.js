import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Bateria from './components/Bateria';


function App(){
  
  let datosIniciales = JSON.parse(localStorage.getItem('datos'))
  if(!datosIniciales){
    datosIniciales = []
  }

  const [datos, setDatos] = useState(datosIniciales)

  useEffect( () => {
    let datosIniciales = JSON.parse(localStorage.getItem('datos'))

    if(datosIniciales){
      localStorage.setItem('datos', JSON.stringify(datos))
    } else {
      localStorage.setItem('datos', JSON.stringify([]))
    }
  }, [datos] )

 



  const nuevoDato = (dato) =>{
    setDatos([
      ...datos,
      dato
    ])
  }

  const eliminarDato = (id) =>{
    const nuevosDatos = datos.filter( dato => dato.id !== id)
    setDatos(nuevosDatos)
  }

  return (

      <Fragment>
        <h1>Administracion de baterias</h1>
        <div className='row container'>
          <div className='u-full-width'>
            <Formulario 
              nuevoDato={nuevoDato}              
            />
          </div>

          <div className='u-full-width'>

            {datos.length === 0
            ? <h3>No hay Baterias Cargadas</h3>
            : <h3>Listado de Baterias</h3>
            }

            {datos.map( dato => (
              <Bateria 
                key={dato.id}
                dato={dato}
                eliminarDato={eliminarDato}
              />
            ))}            
          </div>

        </div>
      </Fragment>
    
  );
}

export default App;
