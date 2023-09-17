import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Box} from 'native-base';

function HelpAlertButton(): JSX.Element {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <Box alignItems="center">
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton}>
        <Text style={styles.highlight}>HELP</Text>
        <Text style={styles.highlight}>ALERT</Text>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 300,
    backgroundColor: '#F6CA56',
    shadowColor: '#F6CA56',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    elevation: 25,
  },
  highlight: {
    fontWeight: '700',
    fontSize: 50,
    color: '#667080',
  },
});

export default HelpAlertButton;
