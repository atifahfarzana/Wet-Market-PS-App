import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, 
    ScrollView, FlatList,Pressable, Image, Dimensions} from 'react-native';
import { auth, firestore } from "../../../firebase";

export default function SearchScreen(){

    return(
        <View style = {{flex: 1, alignContent: "center", justifyContent: "center"}}>
            <Text>Search Screen</Text>
        </View>
    )
}