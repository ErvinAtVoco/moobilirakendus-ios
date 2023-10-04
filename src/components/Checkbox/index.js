import React from "react";
import { TouchableOpacity } from "react-native";

import { styles } from "./style"

const Checkbox = ({checked, onCheck}) => {
    return (
        <TouchableOpacity>
            { checked ?
                (
                    <View>
                        <Image source={require('../../assets/check.png')} />
                    </View>
                ) : null
            }
        </TouchableOpacity>
    )
}