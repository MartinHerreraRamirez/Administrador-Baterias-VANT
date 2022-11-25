import React from 'react'
import PropTypes from 'prop-types'

const Bateria = ({dato, eliminarDato}) => {

    const {marca, modelo, serie, fecha, ciclos } = dato    

    return (  
        <div className='dato listado'>
           <div><p>Marca: <span>{marca}</span></p></div> <div><p>Modelo: <span>{modelo}</span></p></div> <div><p>Serie: <span>{serie}</span></p></div> <div><p>Fecha: <span>{fecha}</span></p></div><div><p>Ciclos: <span>{ciclos}</span></p></div>
         
           <button
                className='button eliminar'
                onClick={ () => eliminarDato(dato.id)}
            >Eliminar &times;</button>
        </div>       
    );
}

Bateria.propTypes = {
    dato: PropTypes.object.isRequired,
    eliminarDato: PropTypes.func.isRequired
}
 
export default Bateria;