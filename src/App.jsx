import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [listProduct, setListProduct] = useState([])
const generarIdUnico1 = () => { 
    return Math.random().toString(30).substring(2);           
} 
const Add=()=>{
  const newProduct={
    id:generarIdUnico1(),
    name:"",
    descripcion:"",
    edad:0,
    compañia:"",
    precio:0,
  }
  setListProduct([...listProduct,newProduct])
}
console.log(listProduct)
  return (
    <div className="app">
      <div className='div-titulo'>
            <p className='parrafo-tabla'>Lista de juguetes</p>
            <button 
            className='boton-tabla'
            onClick={Add}>New</button>
          </div>
      <table className='tabla'>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>DESCRIPCION</th>
          <th>EDAD MINIMA</th>
          <th>COMPAÑIA</th>
          <th>PRECIO</th>
        </tr>
        {
          listProduct.map((product)=>(
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{product.edad}</td>
              <td>{product.compañia}</td>
              <td>{product.precio}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default App
