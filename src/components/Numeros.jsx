import React from 'react'

import PropTypes from 'prop-types'

import Button from './Button'

const numeros = [7,8,9,4,5,6,1,2,3,0,'.','00']

const renderBotones = onClickNumero => {
   // var numero = 0
   // iterar desde el boton 1 hasta el 0 (while, for , foreach)
   // var arraycomponentes +=

   const renderBoton = numero => (
    <Button 
    key = {numero} 
    text= {numero.toString()} 
    clickHandler={onClickNumero}
     />
   )
   return numeros.map(renderBoton)
}

const Numeros = ({onClickNumero}) =>(
    <section className="numeros">
        {
            renderBotones(onClickNumero)
        }
    </section>
)

Numeros.propTypes = {
    onClickNumero: PropTypes.func.isRequired
}

export default Numeros