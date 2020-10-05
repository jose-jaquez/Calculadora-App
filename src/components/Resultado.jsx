import React from 'react'

import PropTypes from 'prop-types'


const Resultado = ({value}) => (
        <div className="resultado">
           {value} 
        </div>
    )


Resultado.propTypes = {
    value: PropTypes.string.isRequired
}

Resultado.defaultProps = {
    value: "0"
}

export default Resultado