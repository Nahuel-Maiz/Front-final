import React, {useState, useEffect} from 'react';
import '../../hojas-de-estilo/MisCompras.css';
import Footer from '../../componentes/Footer.jsx';
import Header from '../../componentes/Header';
import { Button } from "@mui/material";

function MisCompras() { 

    const [venta, setVenta] = useState([])

    const cargarVentas = async () => {
        const response = await fetch ('http://localhost:4000/Ventas')
        const data =  await response.json ()
        setVenta(data)
    }
    console.log(venta)

    useEffect(() => {
        cargarVentas()
    }, [])

    return (
        <>
            <Header />
            <div className='miscompras-todo'>
                dsad
                <div className="flex-car">
                    {venta.length > 0 ? (
                    venta.map((libros, i) => (
                        <div key={i} className="item-carrito">
                        <img src={libros.img}></img>
                        <div>
                            <p className="titulo-carr">{libros.titulo} </p>
                            <p>ID Venta: {libros.id_venta}</p>
                            <p>Metodo de pago : {libros.metodopago} </p>
                            <p>Fecha : {libros.fecha}</p>
                            <p>Nombre de Usuario : {libros.nombreusuario}</p>
                        </div>
                        </div>
                    ))
                    ) : (
                    <div className="center-fail">
                        <h2>No agregaste al carrito </h2>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MisCompras;