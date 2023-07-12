import React from "react";
import {Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/custScreens/HomeScreen';
import SearchScreen from '../screens/custScreens/SearchScreen';
import OrderScreen from '../screens/custScreens/OrderScreen';
import ProfileScreen from '../screens/custScreens/ProfileScreen';
import CartScreen from '../screens/custScreens/CartScreen';
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";

const TabNav = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ... styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width:70,
            height: 70,
            borderRadius:35,
            backgroundColor: colors.grey2
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

export default function BottomTab(){

    return(
        <TabNav.Navigator
            screenOptions = {{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius:15,
                    height: 90,
                    ... styles.shadow
                },
                tabBarInactiveTintColor: colors.grey3,
                tabBarActiveTintColor: colors.buttons,
            }}
        >
            <TabNav.Screen
                name = "HomeScreen"
                component={HomeScreen}
                options={{
                        tabBarLabel : "Home",
                        tabBarIcon : ({color,size}) =>(
                            <Icon
                                name = "home"
                                type= "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }}
            />
            <TabNav.Screen
                name = "SearchScreen"
                component={SearchScreen}
                options={
                    {
                        tabBarLabel : "Search",
                        tabBarIcon : ({color,size}) =>(
                            <Icon
                                name = "search"
                                type= "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />

            <TabNav.Screen
                name = "CartScreen"
                component={CartScreen}
                options={
                    {
                        tabBarLabel : "Cart",
                        tabBarBadge: 3,
                        tabBarBadgeStyle: {backgroundColor: colors.buttons},
                        tabBarIcon : ({color,size}) =>(
                            <Icon
                                name = "shopping-bag"
                                color = {color}
                                size = {size}
                            />
                        ),
                        tabBarButton: (prop) => (
                            <CustomTabBarButton {... prop}/>
                        )
                    }}
            />


            <TabNav.Screen
                name = "OrderScreen"
                component={OrderScreen}
                options={
                    {
                        tabBarLabel : "My Orders",
                        tabBarIcon : ({color,size}) =>(
                            <Icon
                                name = "format-list-bulleted"
                                type= "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />

            <TabNav.Screen
                name = "ProfileScreen"
                component={ProfileScreen}
                options={
                    {
                        tabBarLabel : "My Profile",
                        tabBarIcon : ({color,size}) =>(
                            <Icon
                                name = "person"
                                type= "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
        </TabNav.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})