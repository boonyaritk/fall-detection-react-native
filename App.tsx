/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

import HomeScreen from './src/views/HomeScreen';

setUpdateIntervalForType(SensorTypes.gyroscope, 1000);

function App(): JSX.Element {
  // const subscription = gyroscope.subscribe(({x, y, z, timestamp}) =>
  //   console.log({x, y, z, timestamp}),
  // );
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

export default App;
