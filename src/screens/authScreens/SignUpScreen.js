import React, {useState, useRef, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Image, KeyboardAvoidingView } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button } from "react-native-elements";
import Header from "../../components/Header";
import {auth, firestore} from '../../../firebase'
import PasswordStrengthMeterBar from 'react-native-password-strength-meter-bar';
import firebaseErrors from "../../../firebaseErrors";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUpScreen({navigation}){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const[TextInput2Focussed, setTextInput2Focussed] = useState(false)

    const TextInpput1 = useRef(1)
    const TextInput2 = useRef(2)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("BottomTab");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    if (password == password2) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with:", user.email);

          firestore.collection("users").doc(user.uid).set({
            role: "Customer",
            name: username,
            email:email,
            image:
              "https://firebasestorage.googleapis.com/v0/b/wet-market-ps-app.appspot.com/o/default.png?alt=media&token=b4854484-1a73-4612-bee1-29944fd79e78",
          });
        })
        .catch((error) => alert(firebaseErrors[error.code] || error.message));
    } else {
      alert("The passwords are different :<");
    }
  };

      const handleBack = () => {
        navigation.replace("SigninScreen");
      };

    return(
        <KeyboardAvoidingView
            style={{flex:1}}
        >
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style = {styles.container}>
            <Header title="Create an Account"/>

            <View style = {{marginLeft:10}}>
                <Image
                        source={require("../../../assets/applogo.png")}
                        style={styles.image}
                />
            </View>
                
            <View style = {{marginLeft:20, marginTop:20}}>
                <Text style = {title}>Sign-Up</Text>
            </View>

            <View style = {{marginTop:40}}>
                <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder="Username"
                        ref={TextInpput1}
                        value={username}
                        onChangeText={(text) => setUsername(text)}  
                    />
                </View>
                
                <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder="Email"
                        ref={TextInpput1}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View>
                    <TextInput
                        style = {styles.TextInput1} 
                        placeholder="Password"
                        ref={TextInput2}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <PasswordStrengthMeterBar password={password} style = {{marginHorizontal:15, paddingLeft:15}}/>
                </View>

                <View>
                    <TextInput
                        style = {styles.TextInput1} 
                        placeholder=" Confirm Password"
                        ref={TextInput2}
                        value={password2}
                        onChangeText={(text) => setPassword2(text)}
                        secureTextEntry
                    />
                </View>
            </View>

            <View style = {{marginHorizontal:20,marginTop:20}}>
                <Button 
                    title = "Sign Up"
                    buttonStyle = {parameters.styleButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress={handleSignUp}
                />
            </View>

            <View style={{alignItems: "center"}}>
                <Text style={[styles.text1, { paddingTop: 20 }, { fontSize: 15 }]}>
                    Already have an account?
                </Text>
                <Text
                  style={[styles.text1, { color: "#b4cb8a" }, { fontSize: 15 }]}
                  onPress={handleBack}>
                    Click Here!
                </Text>
            </View>
        </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
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
        marginHorizontal: 120,
        alignItems: "center"
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

    TextInput2:{
        borderWidth:1,
        borderRadius:5,
        marginHorizontal:20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:15,
        marginBottom: 20,
        padding: 10,
    },
})