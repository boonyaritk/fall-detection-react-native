import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';

function ContactScreen(): JSX.Element {
  const [personContacts, setpersonContacts] = useState([
    {
      name: 'agent01',
      phone: '1001',
      relation: 'son',
    },
    {
      name: 'agent02',
      phone: '1002',
      relation: 'dad',
    },
    {
      name: 'agent03',
      phone: '1003',
      relation: 'mom',
    },
    {
      name: 'agent04',
      phone: '1004',
      relation: 'mom',
    },
  ]);

  const [hospitalContacts, sethospitalContacts] = useState([
    {
      name: 'Bellevue Hospital Center',
      doctorName: 'Mr. Smith holmes',
      phone: '+1 212-562-4141',
    },
  ]);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Contacts</Text>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 20,
        }}
      />
      {hospitalContacts.map(hContact => {
        return (
          <Card
            topic="Hospital"
            header={hContact.name}
            details={[hContact.doctorName, hContact.phone]}
            icon="plus"
          />
        );
      })}
      {personContacts.map(pContact => {
        return (
          <Card
            topic="Person"
            header={pContact.name}
            details={[pContact.phone]}
            icon="person"
          />
        );
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
});

export default ContactScreen;
