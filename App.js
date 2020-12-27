import React from 'react';
import { StyleSheet, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import offerReducer from './reducer/offerReducer';
import Offer from './src/offer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const store = createStore(offerReducer);
const Stack = createStackNavigator();

export default function App() {
  return (

    <Provider store={store}>
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
