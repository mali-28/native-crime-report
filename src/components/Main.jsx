import React, { useContext, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../stacks/Home";
import Login from "../stacks/Login.jsx"
import { Icon, Text } from "native-base";
import Admin from "../stacks/Admin";
import Application from "../stacks/Applications";
import Request from "../stacks/Request";
import MyApplication from "../stacks/MyApplications";
import { AuthContext } from "../contexts/Auth/auth";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from "@expo/vector-icons"


const UnAuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const Main = () => {
    const { isLogin } = useContext(AuthContext);
    return (<>

        {isLogin ? <>
            <Tab.Navigator
                screenOptions={{
                    // tabBarShowLabel : false,
                    headerTitleAlign: "center",
                    headerTintColor: "#6200ee",
                    tabBarActiveBackgroundColor: "#6200ee",
                    tabBarActiveTintColor: "#fff",
                    // tabBarLabelStyle:{display:"none"},
                    tabBarInactiveTintColor: "#6200ee",
                    tabBarStyle: { height: 50, },
                    barStyle: {
                        backgroundColor: '#6200ee',

                    },
                    headerStyle: { backgroundColor: "#fff", borderBottomWidth: 1 },
                    // tabBarIcon : {focused : true}

                }}
            >
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => <Ionicons name="chatbox-ellipses-outline" size={28} color={focused ? "#fff" : '#6200ee'} />
                }} name="Application" component={Application} />

                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => <Ionicons name="people-outline" size={28} color={focused ? "#fff" : '#6200ee'} />
                }} name="Admin" component={Admin} />

                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => <Ionicons name="notifications-outline" size={28} color={focused ? "#fff" : '#6200ee'} />
                }} name="Request" component={Request} />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => <Ionicons name="newspaper-outline" size={28} color={focused ? "#fff" : '#6200ee'} />
                }} name="MyApplication" component={MyApplication} />
            </Tab.Navigator>
        </>
            :
            <UnAuthStack.Navigator screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "#6200ee",
            }}>
                <UnAuthStack.Screen name="Home" component={Home}
                    options={{
                        title: 'Home',
                    }} />
                <UnAuthStack.Screen name="login" component={Login} />
            </UnAuthStack.Navigator>

        }</>)



}
