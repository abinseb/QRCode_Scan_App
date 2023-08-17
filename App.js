import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scan from './Pages/Common/Scan';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Scan'
        screenOptions={{headerShown:false,}}
      >
        <Stack.Screen name='Scan' component={Scan} />

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

