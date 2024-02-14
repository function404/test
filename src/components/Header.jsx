// Importa a biblioteca React do pacote 'react'
import React from "react";

// Importa componentes específicos do pacote 'react-native'
import { View, Text, Image } from "react-native";

// Importa estilos do arquivo 'index' localizado na pasta 'style' um nível acima
import styles from "../style/index";

// Função do componente Header
function Header() {
    // Retorna JSX que compõe o componente Header
    return (
        <View style={styles.Header}>
                <Image style={styles.imgHeader} source={{uri: 'https://static.pichau.com.br/logo-pichau-2021-dark.png'}}/>
            <Text  style={styles.titleHeader}>App Test</Text> 
        </View>
    );
}

// Exporta o componente Header para ser utilizado em outros arquivos
export default Header;