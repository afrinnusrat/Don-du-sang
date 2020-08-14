import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import * as Yup from 'yup';

import AppPicker from '../generic/AppPicker';
import {AppForm, AppFormField, SubmitButton} from '../generic/forms';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  telephone: Yup.string().required().label('Telephone'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const [bloodType, setBloodType] = useState();
  const [city, setCity] = useState();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'height' : null}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          alignSelf: 'stretch',

          marginHorizontal: 32,
        }}>
        <Image
          style={styles.logo}
          source={require('../assets/images/blood_donation.png')}
        />
        <AppForm
          initialValues={{name: '', email: '', password: ''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}>
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="الإسم"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="البريد الإلكتروني(إختياري)"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            name="telephone"
            placeholder="رقم الهاتف"
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
          />
          <View style={styles.view}>
            <AppPicker
              selectedItem={bloodType}
              onSelectItem={(item) => setBloodType(item)}
              items={bloodTypes}
              placeholder="فصيلة الدم"
              icon="blood-bag"
              color="red"
            />
            <AppPicker
              selectedItem={city}
              onSelectItem={(item) => setCity(item)}
              items={citys}
              placeholder="المدينة"
              icon="city"
            />
          </View>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="كلمة السر"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="إنشاء حساب" color={colors.primary} />
        </AppForm>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,

    alignSelf: 'center',
  },
  view: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
});

const bloodTypes = [
  {label: 'B+', value: 'B+'},
  {label: 'O+', value: 'O+'},
  {label: 'A+', value: 'A+'},
  {label: 'O-', value: 'O-'},
  {label: 'A-', value: 'A-'},
  {label: 'B-', value: 'B-'},
  {label: 'AB', value: 'AB'},
];

const citys = [
  {label: 'Zouerat', value: 'Zouerat'},
  {label: 'Nouakchott', value: 'Nouakchott+'},
  {label: 'Nouadhibou', value: 'Nouadhibou'},
  {label: 'Kive', value: 'Kive'},
  {label: 'Nema', value: 'Nema'},
  {label: 'Ayoun', value: 'Ayoun'},
  {label: 'Rosso', value: 'Rosso'},
];

export default RegisterScreen;
