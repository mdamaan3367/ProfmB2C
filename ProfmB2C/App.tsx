import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Splash from './screens/Splash'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash1 from './screens/Splash1';
import LogIn from './screens/LogIn';
import Home from './components/Home';
import SignUp from './screens/SignUp';
import Forget from './screens/Forget';
import Notifications from './screens/Notifications';
import OnBordeing from './screens/Onbordeing';
import OnBordeing2 from './screens/Onbordeing2';
import OnBordeing3 from './screens/Onbordeing3';
import OnBordeing4 from './screens/Onbordeing4';
import OnbordingCarousel from './screens/OnbordingCarousel';
import Bottom from './screens/Bottom';
import Bookings from './screens/Bookings';
import Profile from './screens/Profile';
import Menu from './screens/Menu';
import DiscountCarousal from './screens/DiscountCarousal';
import OneTimeService from './screens/OneTimeService';
import HospitalityServices from './screens/HospitalityServices';
import PoolMaintenance from './screens/PoolMaintenance';
import ElectricalWorks from './screens/ElectricalWorks';
import SanitaryPlumbing from './screens/SanitaryPlumbing';
import HVAC from './screens/HVAC';
import PestControl from './screens/PestControl';
import LANDSCAPING from './screens/LANDSCAPING';
import CarpentryWork from './screens/CarpentryWork';
import Profile1 from './screens/Profile1';
import ChangePassword from './screens/ChangePassword';
import MyAddresses from './screens/MyAddresses';
import Invoices from './screens/Invoices';
import Orders from './screens/Orders';
import AboutApp from './screens/AboutApp';
import Menu1 from './screens/Menu1';
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();
const App = () => {

  //pushed
useEffect(() => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage.notification)
    Alert.alert(remoteMessage.notification?.title, remoteMessage.notification?.body);
  });

  return unsubscribe;
}, []);
//pushed
 
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash1"
              component={Splash1}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forget"
              component={Forget}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Onbordeing"
              component={OnBordeing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onbordeing2"
              component={OnBordeing2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onbordeing3"
              component={OnBordeing3}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Onbordeing4"
              component={OnBordeing4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnbordingCarousel"
              component={OnbordingCarousel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bottom"
              component={Bottom}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookings"
              component={Bookings}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DiscountCarousal"
              component={DiscountCarousal}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="OneTimeService"
              component={OneTimeService}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HospitalityServices"
              component={HospitalityServices}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="PoolMaintenance"
              component={PoolMaintenance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ElectricalWorks"
              component={ElectricalWorks}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SanitaryPlumbing"
              component={SanitaryPlumbing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HVAC"
              component={HVAC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PestControl"
              component={PestControl}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LANDSCAPING"
              component={LANDSCAPING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarpentryWork"
              component={CarpentryWork}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Invoices"
              component={Invoices}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyAddresses"
              component={MyAddresses}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Orders"
              component={Orders}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutApp"
              component={AboutApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu1"
              component={Menu1}
              options={{ headerShown: false }}
            />
            
         </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})