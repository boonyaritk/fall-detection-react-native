/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeBaseProvider, Container, Stack, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from '../styles/styles';

function LoginScreen(): JSX.Element {
  // Screen: Login
  //  navigation.navigate('Home')}>
  //   Go to home

  return (
    <NativeBaseProvider>
      <Container
        style={[styles.sectionContainer, {marginTop: 60, marginBottom: 10}]}
        w="100%">
        <Stack direction="column" mb="2.5" mt="1.5" space={3}>
          <Stack direction="row" space={1} alignItems="flex-end">
            <Text style={styles.boldH4}>ยินดีต้อนรับ</Text>
            <Icon name="person-falling" style={styles.icon2} />
          </Stack>
          <Stack direction="row" space={1} alignItems="flex-end">
            <Text style={styles.caption}>ลงชื่อเข้าใช้ด้านล่าง หรือ</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log('registeration');
              }}>
              <Text style={[styles.captionUnderline, {color: '#607d8b'}]}>
                สมัครสมาชิก
              </Text>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </Container>
      <Stack
        space={4}
        w="100%"
        alignItems="center"
        style={{marginTop: 60, marginBottom: 10}}>
        <Text style={styles.boldH3}>Fall Detection</Text>
        <Input
          w={{
            base: '85%',
            md: '25%',
          }}
          variant="rounded"
          placeholder="First Name"
        />
        <Input
          w={{
            base: '85%',
            md: '25%',
          }}
          variant="rounded"
          placeholder="Password"
          type="password"
        />
        <Button
          style={{marginTop: 20}}
          w="70%"
          backgroundColor={'#57727e'}
          borderRadius="full">
          เข้าสู่ระบบ
        </Button>
      </Stack>
    </NativeBaseProvider>
  );
}

export default LoginScreen;
