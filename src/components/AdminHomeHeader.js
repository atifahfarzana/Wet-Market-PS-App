import React from "react"
import {View, Text, StyleSheet} from 'react-native'
import {Icon, withBadge} from 'react-native-elements'
import { colors, parameters } from "../global/styles"
import { useNavigation } from "@react-navigation/native"

export default function AdminHomeHeader(){
    const BadgeIcon = withBadge(0)(Icon)
    
    return(
        <View style = {styles.header}>
            <View style = {{alignItems: "center", justifyContent: "center"}}>
                <Text style = {{color:colors.cardbackground, fontSize:20, fontWeight:"bold"}}>
                    DASHBOARD
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        flexDirection: 'row',
        justifyContent: "center",
        padding: 10,
    },
    
})