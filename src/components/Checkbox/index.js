import React from "react";
import { TouchableOpacity } from "react-native";

import { styles } from "./style"

const Checkbox = ({checked, onCheck}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={() => onCheck(!checked)}>
            { checked ?
                (
                    <View style={styles.innerContainer}>
                        <Image style={styles.checkicon} source={require('../../assets/check.png')} />
                    </View>
                ) : null
            }
        </TouchableOpacity>
    )
}

export default Checkbox;