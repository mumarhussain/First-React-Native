import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
// import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <stack.Navigator >
      {/* <Home /> */}
      <stack.Screen name='Home' component={Home} />
      

      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const Home = () =>{
  return(
    <Text>
      HOme Screen
    </Text>
  )
}
