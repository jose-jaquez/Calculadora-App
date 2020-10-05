import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const OperacionesMat = ({onClickOperation, onClickEqual}) => (
    <section className="operaciones">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)

OperacionesMat.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default OperacionesMat