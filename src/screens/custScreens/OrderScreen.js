import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, 
    ScrollView, FlatList,Pressable, Image, Dimensions} from 'react-native';
import { auth, firestore } from "../../../firebase";

export default function OrderScreen(){

    return(
        <View style = {{flex: 1, alignContent: "center", justifyContent: "center"}}>
            <Text>Order Screen</Text>
        </View>
    )
}