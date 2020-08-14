import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import {AppForm, AppFormField, SubmitButton} from '../generic/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min('8').label('Password'),
});

function LoginScreen(props) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
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
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}>
          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="البريد الإلكتروني"
            icon="email"
            keyboardType="phone-pad"
          />

          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Username"
            textContentType="password"
            secureTextEntry
            placeholder="كلمة السر"
            icon="lock"
          />

          <SubmitButton title="تسجيل الدخول" color={colors.secondary} />
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
    marginTop: 20,
    marginBottom: 40,
    alignSelf: 'center',
  },
});
export default LoginScreen;
