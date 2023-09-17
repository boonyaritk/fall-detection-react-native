import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Center, VStack, Avatar, Heading, Stack, Box} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome6';

import Card from '../components/Card';

function PersonalScreen(): JSX.Element {
  return (
    <Center style={styles.sectionContainer}>
      <VStack
        space={0.5}
        alignItems={{
          base: 'center',
          md: 'flex-start',
        }}>
        <Avatar
          alignSelf="center"
          size="100px"
          source={{
            uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <Text style={styles.sectionTitle}>John Doe (65)</Text>
        <Text>PID:2353AHB34</Text>
        <Card
          topic="Address"
          header="Terra Signature Square"
          details={['414, 7th main Rd, HRBR Layout']}
          icon="house"
        />
        <Card topic="Mobile" header="+99-999-9999" icon="phone" />
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          <Icon name="heart" style={styles.sectionIcon} />
          <Heading style={styles.sectionTopic} size="md" ml="-1">
            Treatment history
          </Heading>
        </Stack>
        <Box style={styles.sectionTreatmentBox} maxW="80">
          <Text style={styles.sectionTreatmentText}>
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
        </Box>
      </VStack>
    </Center>
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
    color: '#546E7A',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionTopic: {
    fontSize: 14,
    fontWeight: '400',
    color: '#BDBDBD',
  },
  sectionIcon: {
    color: '#BDBDBD',
    fontWeight: 'normal',
    fontSize: 25,
    fontFamily: 'courier',
    paddingTop: 5,
  },
  sectionTreatmentBox: {
    padding: 10,
    rounded: 'lg',
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#F5F5F5',
  },
  sectionTreatmentText: {
    fontWeight: '400',
    color: '#546E7A',
  },
});

export default PersonalScreen;
