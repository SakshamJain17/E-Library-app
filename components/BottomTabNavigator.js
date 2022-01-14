import React from "react";
import {CreateBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigatorContainer } from "react-navigation/native";
import TransactionScreen from './Screens/transaction';
import SearchScreen from './Screens/search';

const Tab = CreateBottomNavigator();

export default class BottomTabNavigator extends React.Component{
    render(){
        return(
            <NavigatorContainer>
        <Tab.Navigator>
    <Tab.Screen name= "Transaction" components = {TransactionScreen}/>
        <Tab.Screen name= "Search" components= {SearchScreen}/>       
        </Tab.Navigator>        
            </NavigatorContainer>
        )
    }
}