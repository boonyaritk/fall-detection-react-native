/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';
import 'react-native-gesture-handler';

import PresonalScreen from './PersonalScreen';
import ContactScreen from './ContactScreen';
import LogsScreen from './LogsScreen';
import NeedHelpScreen from './NeedHelpScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FAFAFA',
  },
};

function HomeScreen(): JSX.Element {
  return (
    <NavigationContainer theme={AppTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Personal"
          component={PresonalScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="person" style={styles.sectionIcon} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="id-badge" style={styles.sectionIcon} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Need Help"
          component={NeedHelpScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon
                name="person-falling"
                style={styles.sectionIcon}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Logs"
          component={LogsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="bell" style={styles.sectionIcon} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionIcon: {
    fontSize: 20,
  },
});

export default HomeScreen;
