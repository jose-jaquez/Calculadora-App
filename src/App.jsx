/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Funcion from './components/Funcion'
import Numeros from './components/Numeros'
import OperacionesMat from './components/OperacionesMat'
import Resultado from './components/Resultado';
import './App.css'


const App = () =>{
    const [texto,funcionModificada] = useState("")

    const items = words(texto, /[^-^+^*^/]+/g)
   
    const value = items.length > 0 ? items[items.length - 1]: "0";

    

    return (
    < main className="app-calculadora" >Aplicación Calculadora (App) 
            <Resultado value={value} />
            <Numeros onClickNumero= { numero =>  funcionModificada(`${texto} ${ numero}` )} />

            <Funcion 
            onContentClear={()=>{
                funcionModificada(' ')
}}
            onDelete = {() => {
                if (texto.length > 0) { 
                    const newfuncionModificada = texto.substring(0, texto.length -1)
                    funcionModificada(newfuncionModificada)
                }
            }}
            />
            <OperacionesMat 
            onClickOperation ={ operaciones => {
                funcionModificada(`${texto}${operaciones}`) 
            }}
            onClickEqual  = {igual=> {
                funcionModificada(eval(texto).toString())
                }  }/>
            </main> )
}


export default App

