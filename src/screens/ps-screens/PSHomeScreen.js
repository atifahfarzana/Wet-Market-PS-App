import React, {useState,useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, 
        ScrollView, FlatList,Pressable, Image, Dimensions} from 'react-native'
import {Icon, Button} from 'react-native-elements'
import AdminHomeHeader from "../../components/AdminHomeHeader";
import {colors, parameters} from '../../global/styles'
import { filterData } from "../../global/data";
import { useNavigation } from "@react-navigation/core";
import ItemsCard from '../../components/ItemsCard'
import { auth, firestore } from "../../../firebase";
import PSHomeHeader from "../../components/PSHomeHeader";

const Screen_Width = Dimensions.get("window").width

export default function PSHomeScreen(){
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

    const navigation = useNavigation();   
    
    return(
        <View style = {styles.container}>
            <PSHomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator = {true}
            >

            <View style={styles.header}>
                <View>
                <Text
                    style={{ fontSize: 30, fontWeight: "bold", color: "#4b5142" }}
                > Welcome PS </Text>
                </View>
            </View>

            <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("PSOrdersPage")}
          >
            <Image
              source={require("../../../assets/event.png")}
              resizeMode="center"
              style={styles.menuImage2}
            />
            <Text style={styles.menuText}>Past Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("PSAddScreen")}
          >
            <Image
              source={require("../../../assets/customers.png")}
              resizeMode="center"
              style={styles.menuImage3}
            />
            <Text style={styles.menuText}>Add Items</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("PSItemScreen")}
          >
            <Image
              source={require("../../../assets/pickup-truck.png")}
              resizeMode="center"
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>List Items Available</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("PSProfileScreen")}
          >
            <Image
              source={require("../../../assets/user.png")}
              resizeMode="center"
              style={styles.menuImage3}
            />
            <Text style={styles.menuText}>My Profile</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.backgroundColor
    },
    button: {
        backgroundColor: "#e8a468",
        width: "40%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 20,
      },
      header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        fontSize: 32,
      },
      item: {
        borderBottomColor: "#f7d1b0",
        borderBottomWidth: 1,
        backgroundColor: "white",
        padding: 15,
        marginVertical: 5,
      },
      title: {
        fontSize: 15,
        fontFamily: "sans-serif",
      },
      menuButton: {
        alignItems: "center",
        backgroundColor: "#d7e3d1",
        borderColor: "#e0c3a8",
        borderRadius: 5,
        height: 150,
        width: 116,
        marginLeft: 16,
        marginTop: 20,
      },
      menuImage: {
        marginTop: 20,
        width: 50,
        height: 80,
      },
      menuImage2: {
        marginTop: 20,
        width: 45,
        height: 80,
      },
      menuImage3: {
        marginTop: 20,
        width: 45,
        height: 80,
      },
      menuText: {
        fontSize: 12,
        marginTop: -10,
        textAlign: "center",
      },
})