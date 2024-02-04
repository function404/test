import React from "react";
import { View, Text } from "react-native";

import styles from "../style/index";

function Header() {
    return (
        <View style={styles.Header}>
            <Text  style={styles.titleHeader}>App Test</Text>
        </View>
    );
}

export default Header;