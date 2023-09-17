import React from 'react';
import {StyleSheet} from 'react-native';
import {Center} from 'native-base';

import HelpAlertButton from '../components/HelpAlertButton';

function NeedHelpScreen(): JSX.Element {
  return (
    <Center style={styles.sectionContainer}>
      <HelpAlertButton />
    </Center>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NeedHelpScreen;
