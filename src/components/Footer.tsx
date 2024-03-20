// Importa a biblioteca React do pacote 'react'
import React from "react";

// Importa estilos do arquivo 'index' localizado na pasta 'style' um nível acima
import "../style/global.css";

// Função do componente Footer
export default function Footer() {
    // Retorna JSX que compõe o componente Footer
    return (
        <>
            <div className="Footer">
                <p className="titleFooter"> 
                    Made with ❤ by {''}
                    <a className="linkFooter" href='https://function404.netlify.app'> 
                        Function404
                    </a> 
                </p>
            </div>
        </>
    );
}