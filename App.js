/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeForm from './src/EmployeeForm';
import EmployeeList from './src/EmployeeList';
import EmployeeDetail from './src/EmployeeDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Employee Form">
        <Stack.Screen name="Employee Form" component={EmployeeForm} />
        <Stack.Screen name="Employee List" component={EmployeeList} />
        <Stack.Screen name="Employee Details" component={EmployeeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
