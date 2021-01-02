import React from 'react';
import { StyleSheet, } from 'react-native';
import { Provider } from 'react-redux';
import Offer from './src/offer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
import { getStore, getPersistor } from './reducer/index';


const Stack = createStackNavigator();
const myStore = getStore();
const myPersistor = getPersistor();

export default function App() {
  return (

    <Provider store={myStore}>
      <PersistGate
        persistor={myPersistor}
      >
      <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Home"
              component={HomeScreen}
            /> */}
            <Stack.Screen
              name="Offers"
              component={Offer}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
