import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './app/screens/home'
import Movies from './app/screens/movies'
import Streamlit from './app/screens/streamlit'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {
  const StackScreens = () => (
    <Stack.Navigator initialRouteName='My Home'>
      <Stack.Screen name='My Home' component={Home} />
      <Stack.Screen name='Movies List' component={Movies} />
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='Home'
          component={StackScreens}
          options={{
            headerShown: false,
            tabBarIcon: ({ ref }) => <Feather name='home' ref={ref} size={20} />,
          }}
        />
        <Tab.Screen
          name='Streamlit App'
          component={Streamlit}
          options={{
            headerShown: false,
            tabBarIcon: ({ ref }) => (
              <MaterialCommunityIcons name='movie-cog-outline' ref={ref} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
