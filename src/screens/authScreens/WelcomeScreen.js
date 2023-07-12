import React, {useState, useRef} from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import Swiper from "react-native-swiper";
import SigninScreen from "./SigninScreen";
import SignUpScreen from "./SignUpScreen";

export default function WelcomeScreen({navigation}){
    
    const handleSignUp = () => {
        navigation.replace("SignUpScreen");
      };

    const handleSignIn = () => {
        navigation.replace("SigninScreen");
      };
    
    return(
        <View style = {{flex:1}}>
            <View style = {{ justifyContent: "center", alignItems: "center", /*marginTop: getStatusBarHeight(),*/ paddingTop:20}}>
                <Text style = {{fontSize: 20, color: colors.grey5,fontWeight: "bold"}}>
                    Discover Fresh Products from
                </Text>
                <Text style = {{fontSize: 20, color: colors.grey5,fontWeight: "bold"}}>
                    Pasar Tani Kekal Selayang
                </Text>
            </View>

            <View style = {{flex:4,justifyContent:"center", marginTop: 70}}>
                <Swiper autoplay = {true}>
                    <View style = {styles.slide1}>
                        <Image 
                            source={require("../../../assets/fc.jpeg")}
                            style={styles.image}
                        />
                    </View>

                    <View style = {styles.slide2}>
                        <Image 
                            source={require("../../../assets/fv.jpeg")}
                            style={styles.image}
                        />
                    </View>

                    <View style = {styles.slide3}>
                        <Image 
                            source={require("../../../assets/ffs.jpg")}
                            style={styles.image}
                        />
                    </View>
                </Swiper>
            </View>

            <View style = {{flex: 4, justifyContent: "flex-end", marginBottom:20}}>
                <View style = {{marginHorizontal:20, marginTop: 40}}>
                    <Button 
                        title= "Sign In"
                        buttonStyle = {parameters.styleButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress={handleSignIn}
                    />
                </View>
                <View style = {{marginHorizontal:20, marginTop: 20}}>
                    <Button 
                        title= "Create an Account"
                        buttonStyle = {styles.buttonStyle}
                        titleStyle = {styles.buttonTitle}
                        onPress={handleSignUp}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#556b2f'
    },
    slide2:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#556b2f'
    },
    slide3:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#556b2f'
    },
    image: {
        width: "100%",
        height: "100%",
        marginVertical: 10,
    },
    buttonStyle:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius:12,
        borderWidth:1,
        borderColor: "#556b2f",
        height:50,
        paddingHorizontal:20
    },
    buttonTitle:{
        color: "#556b2f",
        fontSize: 20,
        alignItems:"center",
        justifyContent: "center",
        marginTop: -3
    }
})