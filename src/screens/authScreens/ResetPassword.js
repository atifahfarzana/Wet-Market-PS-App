import React, {useState, useRef} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button } from "react-native-elements";
import Header from "../../components/Header";
import { auth, sendPasswordResetEmail , firestore} from "../../../firebase";

export default function ResetPassword({navigation}){
    const [email, setEmail] = useState("");

    const[TextInput2Focussed, setTextInput2Focussed] = useState(false)

    const TextInpput1 = useRef(1)
    const TextInput2 = useRef(2)

    const handleBack = () => {
        navigation.replace("SigninScreen");
      };
    
      const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            alert("Password reset email sent! Check your inbox");
            navigation.replace("Login");
          })
          .catch((error) => alert(error.message));
      };

    return (
        <View style={styles.container}>
            <Header title="Reset Password"/>
            
            <Image
                source={require("../../../assets/applogo.png")}
                resizeMode="center"
                style={styles.image}
            />

            <View style = {{marginLeft:20, marginTop:20}}>
                <Text style = {title}>Reset Password</Text>
                <View style = {{marginTop: 10}}>
                <Text style = {[styles.text1, {fontSize:15}]}>
                    Please enter your registered email
                </Text>
                </View>
          </View>

          <View style = {{marginHorizontal:5,marginTop:30}}>
            <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder="Email"
                        ref={TextInpput1}
                        onChangeText={(text) => setEmail(text)}
                    />
            </View>
          </View>
          
          <View style = {{marginHorizontal:20,marginTop:20}}>
                <Button 
                    title = "Reset Password"
                    buttonStyle = {parameters.styleButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress={resetPassword}
                />
            <Text style={[styles.textBody, { paddingTop: 20 }, { fontSize: 13 }]}>
              Recall your password?
            </Text>
            <Text
              style={[styles.textBody, { color: "#86939e" }, { fontSize: 13 }]}
              onPress={handleBack}
            >
              Login here!
            </Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    text1:{
        color: colors.grey5,
        fontSize: 16
    },

    image: {
        width: 150,
        height: 150,
        marginVertical: 40,
        marginHorizontal: 130,
        alignItems: "center",
      },

    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:5,
        marginBottom: 20,
        paddingLeft:15,
        padding: 10,
    },
})