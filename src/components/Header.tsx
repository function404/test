// Importa a biblioteca React do pacote 'react'
import React from "react";

// Importa estilos do arquivo 'index' localizado na pasta 'style' um nível acima
import "../style/global.css"

// Função do componente Header
export default function Header() {
    // Retorna JSX que compõe o componente Header
    return (
        <>
            <div className="Header">
                <img className="imgHeader" src="https://static.pichau.com.br/logo-pichau-2021-dark.png"/>
                <p className="titleHeader">App Test</p> 
            </div>
        </>
    );
}