/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  NativeBaseProvider,
  Container,
  Stack,
  Input,
  Button,
  Select,
  CheckIcon,
  TextArea,
} from 'native-base';

import styles from '../styles/styles';

function CreateInfoScreen({navigation}: {navigation: any}): JSX.Element {
  const [gender, setGender] = React.useState('');
  const [treatmentVale, setTreatmentVale] = useState('ไม่มี');
  return (
    <NativeBaseProvider>
      <Container style={[styles.sectionContainer, {marginTop: 60}]} w="100%">
        <Stack direction="column" mb="2.5" mt="1.5" space={3}>
          <Stack direction="row" space={1} alignItems="flex-end">
            <Text style={styles.boldH4}>ข้อมูลส่วนตัว</Text>
          </Stack>
        </Stack>
      </Container>
      <Stack
        space={2}
        w="100%"
        alignItems="left"
        style={{marginTop: 20, paddingHorizontal: 24}}>
        <Text style={[styles.caption, {fontWeight: 'bold'}]}>ชื่อ</Text>
        <Input
          w={{
            base: '100%',
            md: '25%',
          }}
          placeholder="กรุณากรอกชื่อ"
        />
        <Text style={[styles.caption, {fontWeight: 'bold'}]}>นามสกุล</Text>
        <Input
          w={{
            base: '100%',
            md: '25%',
          }}
          placeholder="กรุณากรอกนามสกุล"
        />
        <Stack direction="row" space={3}>
          <Stack direction="column" size="1" space={3} w="60%">
            <Text style={[styles.caption, {fontWeight: 'bold'}]}>
              หมายเลขโทรศัพท์
            </Text>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              placeholder="กรุณากรอกหมายเลขโทรศัพท์"
            />
          </Stack>
          <Stack direction="column" size="1" space={3} w="35%">
            <Text style={[styles.caption, {fontWeight: 'bold'}]}>อายุ</Text>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              placeholder="กรุณากรอกอายุ"
            />
          </Stack>
        </Stack>
        <Text style={[styles.caption, {fontWeight: 'bold'}]}>เพศ</Text>
        <Select
          selectedValue={gender}
          minWidth="200"
          accessibilityLabel="Choose Gender"
          placeholder="กรุณาเลือกเพศ"
          _selectedItem={{
            bg: '#b6c3ca',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setGender(itemValue)}>
          <Select.Item label="ผู้ชาย" value="male" />
          <Select.Item label="ผู้หญิง" value="female" />
        </Select>
        <Text style={[styles.caption, {fontWeight: 'bold'}]}>
          ประวัติการรักษา
        </Text>
        <TextArea
          value={treatmentVale}
          onChangeText={text => setTreatmentVale(text)}
          autoCompleteType={true}
          w="100%"
        />
        <Button
          style={{marginTop: 20}}
          w="50%"
          backgroundColor={'#57727e'}
          borderRadius="full">
          บันทึก
        </Button>
      </Stack>
    </NativeBaseProvider>
  );
}

export default CreateInfoScreen;
