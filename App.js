import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'


export default function App() {
    return(
      <AppContainer/>
    );
}


const switchNavigator = createSwitchNavigator({
    SignupLoginScreen:{screens: SignupLoginScreen},
    Drawer:{screens: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);