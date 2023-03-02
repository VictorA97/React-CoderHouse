import React from 'react'
import "./Productos.css";
import IMG from "../../img/Black.jpg";

export const productosLista = () => {
    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                <a href="">
                <div className="producto">
                    <img src={IMG} alt="" />
                </div>
                </a>
            </div>
            <div className="productoFooter">
                <h1>Title</h1>
                <p> Categoria </p>
                <p className="price">$1200</p>
            </div>
            <div className="buttom">
                <buttom className="btn">
                    Añadir al carrito
                </buttom>
                <div>
                    <a href="" className="btn">Vista</a>
                </div>
            </div>
        </>
    )
}
