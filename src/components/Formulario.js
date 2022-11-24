import React, {Fragment, useState} from 'react'
import {v4} from 'uuid'
import PropTypes from 'prop-types'

const Formulario = ({nuevoDato}) => {

    const [dato, setDato] = useState({
        marca: '',
        modelo: '',
        serie: '',
        fecha: ''
    })

    const [ error, setError ] = useState(false)

    const leerCampos = (e) => {        
        setDato({...dato,
            [e.target.name]: e.target.value})
    }

    const { marca, modelo, serie, fecha } = dato

    const enviarFormulario = (e) => {

        e.preventDefault()
        
        if(marca.trim() === '' || modelo.trim() === '' || serie.trim() === '' || fecha.trim() === ''){
            setError(true)
            return
        }
        setError(false)

        dato.id = v4()
        console.log(dato)

        nuevoDato(dato)

        setDato({
            marca: '',
            modelo: '',
            serie: '',
            fecha: ''
        })


    }

    return (  
        <Fragment>
            <h3>Ingrese los Datos</h3>
            {error
            ? <p className='alerta-error'>Complete todos los campos</p>
            : null
            }
            <form
                onSubmit={enviarFormulario}
            >
                <label>Marca:</label>
                <input 
                    type='text'
                    name='marca'
                    value={marca}
                    className='u-full-width'
                    placeholder='Ingrese la Marca'
                    onChange={leerCampos}
                />

                <label>Modelo:</label>
                <input 
                    type='text'
                    name='modelo'
                    value={modelo}
                    className='u-full-width'
                    placeholder='Ingrese el Modelo'
                    onChange={leerCampos}
                />

                <label>Numero de Serie:</label>
                <input 
                    type='text'
                    name='serie'
                    value={serie}
                    className='u-full-width'
                    placeholder='Ingrese el Numero de Serie'
                    onChange={leerCampos}
                />

                <label>Fecha:</label>
                <input 
                    type='date'
                    name='fecha'
                    value={fecha}
                    className='u-full-width'
                    onChange={leerCampos}                    
                />

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Bateria</button>
            </form>
        </Fragment>   
    );
}

Formulario.propTypes = {
    nuevoDato: PropTypes.func.isRequired
}
 
export default Formulario;