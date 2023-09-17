import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Box, Stack, Heading} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome6';

type CardProps = {
  topic: string;
  header: string;
  icon: string;
  details?: string[];
};

function AddeessCard(props: CardProps): JSX.Element {
  return (
    <Box alignItems="center">
      <Box style={styles.sectionCard} maxW="80">
        <Stack p="4" space={0.5} direction="column">
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Icon name={props.icon} style={styles.sectionIcon} />
            <Stack p="1" space={0.5} direction="column">
              <Heading style={styles.sectionTopic} size="md" ml="-1">
                {props.topic}
              </Heading>
              <Text style={styles.sectionHeader}>{props.header}</Text>
              {props.details
                ? props.details.map(detail => {
                    return (
                      <Text style={styles.sectionTopicDetail}>{detail}</Text>
                    );
                  })
                : null}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  test: {
    justifyContent: 'center',
  },
  sectionCard: {
    margin: 5,
    width: 400,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.0,
    elevation: 2,
    maxW: '80',
    rounded: 'lg',
    overflow: 'hidden',
    borderColor: '#F5F5F5',
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
  },
  sectionTopic: {
    fontSize: 14,
    fontWeight: '400',
    color: '#BDBDBD',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#546E7A',
  },
  sectionTopicDetail: {
    fontSize: 14,
    fontWeight: '200',
    color: '#667080',
  },
  sectionIcon: {
    color: '#BDBDBD',
    fontWeight: 'normal',
    fontSize: 25,
    fontFamily: 'courier',
    paddingTop: 5,
  },
});

export default AddeessCard;
