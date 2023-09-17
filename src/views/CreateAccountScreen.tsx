/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeBaseProvider, Container, Stack, Input, Button} from 'native-base';

import styles from '../styles/styles';

function CreateAccountScreen({navigation}: {navigation: any}): JSX.Element {
  return (
    <NativeBaseProvider>
      <Container
        style={[styles.sectionContainer, {marginTop: 60, marginBottom: 10}]}
        w="100%">
        <Stack direction="column" mb="2.5" mt="1.5" space={3}>
          <Stack direction="row" space={1} alignItems="flex-end">
            <Text style={styles.boldH4}>สมัครสมาชิก</Text>
          </Stack>
          <Stack direction="row" space={1} alignItems="flex-end">
            <Text style={styles.caption}>กรอกข้อมูลสมาชิกด้านล่าง หรือ</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.captionUnderline, {color: '#607d8b'}]}>
                เข้าสู่ระบบ
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
          borderRadius="full"
          onPress={() => navigation.navigate('Infomation')}>
          สมัครสมาชิก
        </Button>
      </Stack>
    </NativeBaseProvider>
  );
}

export default CreateAccountScreen;
