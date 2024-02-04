import React from "react";
import { View, Text, Linking} from "react-native";

import styles from "../style/index";

function Footer() {
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

export default Footer;