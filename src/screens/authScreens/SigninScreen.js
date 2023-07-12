import React, {useState, useRef, useEffect} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, Dimensions, TextInput, Image, KeyboardAvoidingView,TouchableOpacity } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import Header from "../../components/Header";
import {auth, firestore} from '../../../firebase'
import firebaseErrors from "../../../firebaseErrors";
import { ScrollView } from "react-native-gesture-handler";
import WelcomeScreen from "./WelcomeScreen";

export default function SigninScreen({}){

    const[TextInput2Focussed, setTextInput2Focussed] = useState(false)

    const TextInpput1 = useRef(1)
    const TextInput2 = useRef(2)

    const navigation = useNavigation();

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            const getRole = async () => {
              const roleRef = firestore.collection("users").doc(user.uid);
              const doc = await roleRef.get();
              if (!doc.exists) {
                console.log("No such document!");
              } else {
                const role = doc.data().role;
                return role;
              }
            };
    
            (async function () {
              let role = await getRole();
    
              if (role == "Admin") {
                navigation.replace("AdminHomeScreen", {
                  paramKey: user.displayName,
                });
              }
              else if (role == "Personal Shopper"){
                navigation.replace("PSHomeScreen", {
                  paramKey:user.displayName,
                })
              } else {
                navigation.replace("BottomTab");
              }
            })();
          }
        });
    
        return unsubscribe;
      }, []);
    
    const handleSignUp = () => {
        navigation.replace("SignUpScreen");
      };
    
      const handleSignin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Logged in with:", user.email);
          })
          .catch((error) => alert(firebaseErrors[error.code] || error.message));
      };
    
      const handleReset = () => {
        navigation.replace("ResetPassword");
      };
      
      

    return(
        <KeyboardAvoidingView
            style={{flex:2}}
        >
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style = {styles.container}>
            <Header title="My Account"/>

            <View style = {{marginLeft:10}}>
                <Image
                        source={require("../../../assets/applogo.png")}
                        style={styles.image}
                />
            </View>
                
            <View style = {{marginLeft:20, marginTop:20}}>
                <Text style = {title}>Sign-In</Text>
            </View>

            <View style = {{alignItems:"center", marginTop: 30}}>
                <Text style = {styles.text1}>
                    Sign-In with your account
                </Text>
                <Text style = {[styles.text1, {fontSize:15}]}>
                    Please enter your registered email and password
                </Text>
            </View>

            <View style = {{marginTop:40}}>
                <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder="Email"
                        ref={TextInpput1}
                        value = {email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style = {styles.TextInput2}>
                    <TextInput
                        style = {{flex:1}} 
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        ref={TextInput2}
                        secureTextEntry={!showPassword}
                        onFocus={()=>{
                            setTextInput2Focussed(false)
                        }}
                        onBlur={()=>{
                            setTextInput2Focussed(true)
                        }}
                    />

                <View>
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                    >
                    <Icon 
                        name = {showPassword ? "visibility-off" : "visibility"}
                        iconStyle={{color:colors.grey3}}
                        type="material"
                        style={{marginRight:10}}
                    />
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <View style={{alignItems: "flex-end", marginTop:20, marginRight: 20}}>
             <Text
                style={{...styles.text1, textDecorationLine:"underline", fontSize: 13}} 
                onPress={handleReset}>
                 Forgot Password?
             </Text>
            </View>

            <View style = {{marginHorizontal:20,marginTop:20}}>
                <Button 
                    title = "Sign In"
                    buttonStyle = {parameters.styleButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress={handleSignin}
                />
            </View>

            <View style={{alignItems: "center"}}>
                <Text style={[styles.text1, { paddingTop: 20 }, { fontSize: 15 }]}>
                    Don't have an account?
                </Text>
                <Text
                  style={[styles.text1, { color: "#b4cb8a" }, { fontSize: 15 }]}
                  onPress={handleSignUp}>
                    Create one!
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
        padding:10,
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
        padding:10,
    },
})