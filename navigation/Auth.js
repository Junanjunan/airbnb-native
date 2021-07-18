import React from "react";
import { Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Auth = createStackNavigator();

const isAndroid = Platform.Os === "android"

export default () => (
    <Auth.Navigator mode="modal" headerMode="float" screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerBackImage: () => ( 
            <View style={{paddingLeft: 10}}>
                <Ionicons 
                    name={isAndroid ? "md-arrow-down": "ios-arrow-down"}
                    size={28} 
                />
            </View>
        )
    }}>
        <Auth.Screen name="Welcome" component={Welcome} />
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
);  