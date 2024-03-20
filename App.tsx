// Importa a biblioteca React do pacote 'react'
import React from "react";

// Importa o componente 'RenderPosts' de um arquivo chamado 'Posts' na pasta 'components' dentro do diretório 'src'
import RenderPosts from './src/components/Posts';

// Função principal do componente App
function App() {
    // Retorna o JSX que compõe o componente
    return (
        <>
            <RenderPosts />
        </>
    );
}

// Exporta o componente App para ser utilizado em outros arquivos
export default App;
