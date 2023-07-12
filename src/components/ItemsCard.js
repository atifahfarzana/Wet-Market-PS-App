import React from "react";
import {Text, View, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'
import { Icon } from "react-native-elements";
import { colors,parameters } from "../global/styles";

export default function ItemsCard({
    onPressItemsCard,
    ItemName,
    deliveryAvailable,
    numberOfReview,
    farAway,
    averageReview,
    images,
    screenWidth
}){
    return(
        <TouchableOpacity>
            <View style = {{...styles.cardView, width: screenWidth}}>
                <Image 
                    style = {{...styles.image,width: screenWidth}}
                    source={require("../../assets/fc.jpeg")}
                />
            </View>
            <View>
                <View>
                    <Text style = {styles.itemsname}>
                        Fresh Chicken
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor: colors.grey5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:200,
    },
    itemsname:{
        fontSize: 17,
        fontFamily: "sans-serif-medium",
        color: colors.grey5,
        marginTop:5,
        marginLeft:20,
    },
})