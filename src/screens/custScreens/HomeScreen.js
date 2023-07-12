import React, {useState,useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, 
        ScrollView, FlatList,Pressable, Image, Dimensions} from 'react-native'
import {Icon, Button} from 'react-native-elements'
import HomeHeader from "../../components/HomeHeader";
import {colors, parameters} from '../../global/styles'
import { filterData } from "../../global/data";
import { useNavigation } from "@react-navigation/core";
import ItemsCard from '../../components/ItemsCard'
import { auth, firestore } from "../../../firebase";

const Screen_Width = Dimensions.get("window").width

export default function HomeScreen(){
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

    const navigation = useNavigation();   

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("SigninScreen");
          })
          .catch((error) => alert(error.message));
      };
    
    return(
        <View style = {styles.container}>
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator = {true}
            >
            <View>
            <View style = {{marginTop:10, flexDirection: "row", justifyContent:"space-evenly"}}>
                <TouchableOpacity
                    onPress={()=>{
                        setDelivery(true)
                    }}
                >
                    <View style = {{...styles.deliveryButtons, backgroundColor: delivery?colors.buttons :colors.grey4}}>
                        <Text style = {styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{
                        setDelivery(false)
                    }}
                >
                    <View style = {{...styles.deliveryButtons, backgroundColor: delivery?colors.grey4 :colors.buttons}}>
                        <Text style = {styles.deliveryText}>Pick Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>  

            <View style = {styles.filter}>
            <View style = {styles.address}>
                <View style = {{flexDirection:"row", alignItems:"center", paddingLeft: 10}}>
                    <Icon 
                        type = "material-community"
                        name = "map-marker"
                        color = {colors.grey4}
                        size = {26}
                    />

                    <Text style = {{marginLeft:5}}>29, Jalan 5, Dataran Templer</Text>
                </View>

                <View style = {styles.time}>
                    <Icon 
                        type = "material-community"
                        name = "clock-time-four"
                        color = {colors.grey4}
                        size = {26}
                    />

                    <Text style = {{marginLeft:5}}>Now</Text>
                </View>
            </View>

            </View>

            <View style = {styles.headerCatView}>
                <Text style = {styles.headerCat}>Categories</Text>
            </View>

            <View>
                <FlatList
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    data = {filterData}
                    keyExtractor = {(item)=>item.id}
                    extraData = {indexCheck}
                    renderItem = {({item, index})=>(
                        <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                        >
                            <View style = {indexCheck===item.id ? {...styles.cardSelected}:{...styles.smallCard}}>
                                <Image
                                    style = {{height:60,width:60,borderRadius:10}}
                                    source={item.image}
                                />

                                <View>
                                    <Text style = {indexCheck === item.id ? {...styles.smallSelectCardText}:
                                    {...styles.smallCardText}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>

            <View style = {styles.headerCatView}>
                <Text style = {styles.headerText}>Produce Available in Pasar Tani Kekal Selayang</Text>
            </View>
            <View>
                <FlatList
                    style = {{marginTop:10, marginBottom:10}}
                    horizontal = {true}
                    data = {filterData}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item})=>(
                        <View>
                            <ItemsCard
                                screenWidth = {Screen_Width*0.8}
                                ItemName = {item.itemsname}
                            />
                        </View>
                    )}
                />
            </View>

            <View style = {styles.headerCatView}>
                <Text style = {styles.headerText}>Produce Available in Pasar Tani Kekal Selayang</Text>
            </View>
            <View>
                <FlatList
                    style = {{marginTop:10, marginBottom:10}}
                    horizontal = {true}
                    data = {filterData}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item})=>(
                        <View>
                            <ItemsCard
                                screenWidth = {Screen_Width*0.8}
                                ItemName = {item.itemsname}
                            />
                        </View>
                    )}
                />
            </View>
            </ScrollView>

            <View style= {styles.floatButton}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('MapScreen')
                    }}
                >
                    <Icon
                        name = "place"
                        type = "material"
                        size = {32}
                        color={colors.buttons}
                    />
                    <Text style = {colors.grey5}>Map</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.backgroundColor
    },
    deliveryButtons:{
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,

    },
    deliveryText:{
        fontFamily: "sans-serif-medium",
        marginLeft: 5,
        fontSize:16
    },
    filter:{
        flexDirection: "row", 
        alignItems:"center", 
        justifyContent:"space-evenly", 
        marginHorizontal:10, 
        marginVertical:10
    },
    time:{
        flexDirection:"row", 
        alignItems:"center", 
        marginLeft: 20, 
        backgroundColor:colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal:5,
        marginRight:20,
    },
    address:{
        flexDirection: 'row', 
        backgroundColor: colors.grey1, 
        borderRadius:15, 
        paddingVertical: 5, 
        justifyContent: "space-between", 
        paddingHorizontal:5
    },
    headerCat:{
        paddingLeft:20,
        fontSize: 24,
        fontWeight:"bold", 
        paddingLeft:10,
    },
    headerCatView:{
        paddingVertical: 3,
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey2,
        justifyContent:"center",
        alignItems: "center",
        padding: 5,
        width:110,
        margin:10,
        height:110,
    },
    cardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems: "center",
        padding: 5,
        width:110,
        margin:10,
        height:110,
    },
    smallSelectCardText:{
        fontFamily: "sans-serif-medium",
        color:colors.cardbackground,
    },
    smallCardText:{
        fontFamily: "sans-serif-medium",
        color:colors.grey5
    },
    headerText:{
        fontFamily: "sans-serif-medium",
        paddingLeft:20,
        fontSize: 20,
        fontWeight:"bold", 
        paddingLeft:10,
    },
    text: {
        fontFamily: "sans-serif-medium",
        color: colors.grey5,
        fontSize: 15,
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
    },
    floatButton:{
        position:'absolute',
        bottom: 10, right:15,
        backgroundColor: 'white',
        elevation:10,
        width:60, height: 60,
        borderRadius: 30,
        alignItems: 'center',
    }
})