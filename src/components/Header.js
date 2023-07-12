import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

export default function Header({title,type}){
    return(
        <View style = {styles.header}>
            <View>
                <TouchableOpacity
                    style = {styles.backBtn}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image source = {require('../../assets/back.png')} style = {styles.backIcon}/>
                    </TouchableOpacity>
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    },

    headerText:{
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30
    },
    backBtn:{
        width:40,
        height:40,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation:5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top:20,
        left:20,
    },
    backIcon:{
        width: '50%',
        height: '50%',
    }
})