import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, 
    ScrollView, FlatList,Pressable, Image, Dimensions} from 'react-native';
import { auth, firestore } from "../../../firebase";

export default function MapScreen(){

    return(
        <View style = {{flex: 1, alignContent: "center", justifyContent: "center"}}>
            <Text>Map Screen</Text>
        </View>
    )
}