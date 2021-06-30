import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Calc from '../src/pages/calc';

const Stack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
     <StatusBar style="light" backgroundColor="#202020"/>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Calc}
          options={{
            title: 'Distribuição de renda',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#202020'},
            headerTintColor: '#c6c6c6',
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;