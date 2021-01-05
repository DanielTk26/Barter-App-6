import React from 'react';
import {createDrawerNavigator} from 'react-naigation-drawer';
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen'
import ExchangeScreen from '../screens/ExchangeScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
     screen: AppTabNavigator
    },
    Setting : {
     screen: SettingScreen
    },
    Exchange : {
      screen:ExchangeScreen
    }
     },
     {
      contentComponent:CustomSideBarMenu
     },
     {
        initialRouteName: 'Home'
})