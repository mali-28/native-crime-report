import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../stacks/Home";
import Login from "../stacks/Login.jsx"
import { Text } from "native-base";

const Stack = createNativeStackNavigator();

export const Main = () => {
    return ( <Stack.Navigator screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#6200ee",
    }}>
        <Stack.Screen name="Home" component={Home}
            options={{
                title: 'Home',
            }} />
        <Stack.Screen name="login" component={Login}/>
    </Stack.Navigator>)



}
