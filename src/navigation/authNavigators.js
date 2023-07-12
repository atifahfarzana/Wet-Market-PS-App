import React from "react"
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import WelcomeScreen from "../screens/authScreens/WelcomeScreen";
import SigninScreen from "../screens/authScreens/SigninScreen";
import HomeScreen from "../screens/custScreens/HomeScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import ResetPassword from "../screens/authScreens/ResetPassword";
import BottomTab from "./BottomTab";
import ProfileScreen from "../screens/custScreens/ProfileScreen";
import AdminHomeScreen from "../screens/adminScreens/AdminHomeScreen";
import AdminProfileScreen from "../screens/adminScreens/AdminProfileScreen";
import MapScreen from "../screens/custScreens/MapScreen";
import PSHomeScreen from "../screens/ps-screens/PSHomeScreen";
import PSItemScreen from "../screens/ps-screens/PSItemScreen";
import PSAddScreen from "../screens/ps-screens/PSAddScreen";
import PSProfileScreen from "../screens/ps-screens/PSProfileScreen";
import AdminItemScreen from "../screens/adminScreens/AdminItemScreen";
import PSOrdersPage from "../screens/ps-screens/PSOrdersPage";


const auth = createStackNavigator();

export default function AuthStack(){
    return(
        <auth.Navigator>
            <auth.Screen 
                name = "WelcomeScreen"
                component = {WelcomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "SigninScreen"
                component = {SigninScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "BottomTab"
                component = {BottomTab}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "SignUpScreen"
                component={SignUpScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "ResetPassword"
                component={ResetPassword}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "ProfileScreen"
                component={ProfileScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen
                name = "AdminHomeScreen"
                component={AdminHomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "AdminProfileScreen"
                component={AdminProfileScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "AdminItemScreen"
                component={AdminItemScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "MapScreen"
                component={MapScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "PSHomeScreen"
                component={PSHomeScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "PSItemScreen"
                component={PSItemScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "PSAddScreen"
                component={PSAddScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "PSOrdersPage"
                component={PSOrdersPage}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <auth.Screen 
                name = "PSProfileScreen"
                component={PSProfileScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </auth.Navigator>
    )
} 