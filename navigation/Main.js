import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../screens/Main/Explore";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import colors from "../colors";

const Main = createBottomTabNavigator();

export default () => (
<Main.Navigator 
    tabBarOptions={{
        activeTintColor: colors.red,
        labelStyle: {
        textTransform: "uppercase",
        fontWeight: "bold"
        }
    }}
    screenOptions = {({route}) =>({
        tabBarIcon: ({focused}) => {
            
        }
    })}
    >
    <Main.Screen name="Explore" component={Explore}></Main.Screen>
    <Main.Screen name="Saved" component={Saved}></Main.Screen>
    <Main.Screen name="Map" component={MapScreen}></Main.Screen>
    <Main.Screen name="Profile" component={Profile}></Main.Screen>
</Main.Navigator>
);