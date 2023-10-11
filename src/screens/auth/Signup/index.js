import React, {useState} from "react";
import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { styles } from "./styles";
import { useState } from "react";

const Signup = () => {
    const [checked, setCheck] = useState(False)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@email.com"/>
            <Input isPassword label="Password" placeholder="***********"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign In"/>
        </View>
    )
}

export default Signup;