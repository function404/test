// Importa a biblioteca React do pacote 'react'
import React from "react";

// Importa componentes específicos do pacote 'react-native'
import { View, Text, Linking} from "react-native";

// Importa estilos do arquivo 'index' localizado na pasta 'style' um nível acima
import styles from "../style/index";

// Função do componente Footer
function Footer() {
    // Retorna JSX que compõe o componente Footer
    return (
        <View style={styles.Footer}>
            <Text style={styles.titleFooter}> 
                Made with ❤ by{' '} 
                <Text 
                    style={styles.linkFooter} 
                    onPress={() => { 
                            Linking.openURL('https://function404.netlify.app'); 
                        }}> 
                    Function404
                </Text> 
            </Text>
        </View>
    );
}

// Exporta o componente Footer para ser utilizado em outros arquivos
export default Footer;