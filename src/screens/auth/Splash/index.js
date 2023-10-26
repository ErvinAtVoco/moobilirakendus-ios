import React from "react";
import {
    Text,
    View,
    Image,
    SafeAreaView
} from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Splash = ({navigation}) => {
    console.log('navigation => ', navigation)

    const onSignup = () => {
        navigation.navigate('Signup')
    }
    const onSignin = () => {
        navigation.navigate('Signin')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}></Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You'll Find</Text> 
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text> 
                    <Text style={styles.title}>Here</Text>
                </View>
                <Button onPress={onSignup} title="Sign Up" />

                <Pressable onPress={onSignin} hitSlop={20}>
                    <Text style={styles.footerText}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Splash