/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stack, Heading} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome6';

function LogsScreen(): JSX.Element {
  const [logs, setlogs] = useState([
    {
      type: 'OWNER',
      description: {
        status: "I'm OK",
        dateTime: '10-09-2023 12:00:00',
      },
    },
    {
      type: 'OWNER',
      description: {
        status: 'I Need Help',
        dateTime: '10-09-2023 12:00:00',
      },
    },
    {
      type: 'OTHER',
      description: {
        name: 'Mr.Janifer Doe',
        phone: '+1 212-562-4141',
        dateTime: '10-09-2023 12:00:00',
      },
    },
    {
      type: 'OTHER',
      description: {
        name: 'Mr.Chris Joe',
        phone: '+2 999-999-9999',
        dateTime: '10-09-2023 12:00:00',
      },
    },
  ]);
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Logs</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 20,
        }}
      />
      {logs.map(log => {
        if (log.type === 'OWNER') {
          return (
            <Stack direction="column" space={4} alignItems="left">
              <Stack direction="row" space={4}>
                <Icon name="circle-exclamation" style={styles.sectionIcon} />
                <Stack direction="column" space={4}>
                  <Heading
                    style={styles.sectionTreatmentText}
                    size="md"
                    ml="-1">
                    Falling detect alert
                  </Heading>
                  <Text style={styles.sectionDescription}>
                    {log.description.dateTime}
                  </Text>
                  <Text style={styles.sectionDescription}>
                    {log.description.status}
                  </Text>
                </Stack>
              </Stack>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginBottom: 20,
                }}
              />
            </Stack>
          );
        } else {
          return (
            <Stack direction="column" space={4} alignItems="left">
              <Stack direction="row" space={4}>
                <Icon name="bell" style={styles.sectionIcon} solid />
                <Stack direction="column" space={4}>
                  <Heading
                    style={styles.sectionTreatmentText}
                    size="md"
                    ml="-1">
                    Need help alert
                  </Heading>
                  <Text style={styles.sectionDescription}>
                    {log.description.dateTime}
                  </Text>
                  <Text style={styles.sectionDescription}>
                    {log.description.name}
                  </Text>
                  <Text style={styles.sectionDescription}>
                    {log.description.phone}
                  </Text>
                </Stack>
              </Stack>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginBottom: 20,
                }}
              />
            </Stack>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionTreatmentText: {
    fontWeight: '400',
    color: '#546E7A',
  },
  sectionIcon: {
    color: '#BDBDBD',
    fontWeight: 'normal',
    fontSize: 25,
    fontFamily: 'courier',
  },
});

export default LogsScreen;
