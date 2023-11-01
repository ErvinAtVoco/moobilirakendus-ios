import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { Styles } from "./styles";

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
};

export default React.memo(Home)