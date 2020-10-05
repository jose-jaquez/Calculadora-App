import React from 'react'

import Button from './Button'

import PropTypes from 'prop-types'

const Funcion = ({onContentClear, onDelete}) => (
    <section className="funciones">
        <Button type="button-long-text" text="Limpiar" clickHandler={onContentClear}/>
        <Button text="&larr;" clickHandler={onDelete}/>
    </section>
)

Funcion.propTypes = {
    onContentClear: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired
}


export default Funcion