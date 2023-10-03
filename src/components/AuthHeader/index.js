import React from "react";
import { Pressable, Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";

const AuthHedear = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image styles={styles.Image}source={require('../../assets/auth_back.png')}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};